var normalizer = require("./normalize.js");
// city plot

class Plot {
    constructor(nodes, cities) {
        this.update(nodes, cities, 0);
    }

    update(nodes, cities, current_epoch) {
        console.log("enter "+current_epoch);
        var svg = d3.select("body").append("svg").attr("width", 1415).attr("height", 700)
        .style("border", "1px solid grey");

        var width = svg.attr("width");
        var height = svg.attr("height");

        var nodes_data = this.get_scaled(nodes, width, height);
        var cities_data = this.get_scaled(cities, width, height);

        var city_circles = svg.selectAll("city")
            .data(cities_data)
            .enter().append("circle")
                .attr("class", "city")
                .attr("cx", function(d) { return d[0] })
                .attr("cy", function(d) { return d[1] })
                .attr("r", 10)
                .style("fill", "red")
                .style("stroke", "black");

        var lines = svg.selectAll("path")
            .data(nodes_data)
            .enter().append("line")
                .attr("class", "path")
                .attr("x1", function(d) { return d[0] })
                .attr("x2", function(d, i) { return nodes_data[(i+1)%nodes_data.length][0] })
                .attr("y1", function(d) { return d[1] })
                .attr("y2", function(d, i) { return nodes_data[(i+1)%nodes_data.length][1] })
                .style("stroke", "rgba(0,0,0,0.5)");

        var node_circles = svg.selectAll("node")
            .data(nodes_data)
            .enter().append("circle")
                .attr("class", "node")
                .attr("cx", function(d) { return d[0] })
                .attr("cy", function(d) { return d[1] })
                .attr("r", 5)
                .style("fill", "rgba(0,128,0,0.5)");
        
        svg.exit().remove();
        city_circles.exit().remove();
        lines.exit().remove();
        node_circles.exit().remove();
    }

    get_scaled(nodes, width, height) {
        var scaled_values = [];
        var x_max = nodes[0][0];
        var x_min = nodes[0][0];
        var y_max = nodes[0][1];
        var y_min = nodes[0][1];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i][0] > x_max) { x_max = nodes[i][0] };
            if (nodes[i][0] < x_min) { x_min = nodes[i][0] };
            if (nodes[i][1] > y_max) { y_max = nodes[i][1] };
            if (nodes[i][1] < y_min) { y_min = nodes[i][1] };
        }
        var scale_x = d3.scaleLinear().domain([x_min, x_max]).range([50, width-50]);
        var scale_y = d3.scaleLinear().domain([y_min, y_max]).range([50, height-50]);
        for (var i = 0; i < nodes.length; i++) {
            scaled_values.push([scale_x(nodes[i][0]),scale_y(nodes[i][1])]);
        }
        return scaled_values;
    }
}

module.exports = { Plot: Plot }
