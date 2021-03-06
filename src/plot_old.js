var normalizer = require("./normalize.js");
// city plot

class Plot {
    constructor(nodes, cities) {
        this.svg = d3.select("body").append("svg").attr("width", 1415).attr("height", 700)
        .style("border", "1px solid grey");
        this.width = this.svg.attr("width");
        this.height = this.svg.attr("height");

        this.nodes = this.get_scaled(nodes, this.width, this.height);
        // console.log("nodes before");
        // for (var j = 0; j < this.nodes.length; j++) {
        //     console.log((j+1) + " " + parseInt(this.nodes[j][0]) + ":" + parseInt(this.nodes[j][1]));
        // }
        this.cities = this.get_scaled(cities, this.width, this.height);
        // console.log("cities before");
        // for (var j = 0; j < this.nodes.length; j++) {
        //     console.log((j+1) + " " + parseInt(this.nodes[j][0]) + ":" + parseInt(this.nodes[j][1]));
        // }

        for(var pos = 0; pos < this.cities.length; pos++) {
            this.svg.append("circle")
            .attr("id", "city"+pos)
            .attr("cx", parseInt(this.cities[pos][0]))
            .attr("cy", parseInt(this.cities[pos][1]))
            .attr("r", 10)
            .style("fill", "red")
            .style("stroke", "black");
            
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.cities[pos][0]))));
            //console.log(parseInt(this.correct_pos_y(parseFloat(this.cities[pos][1]))));
        }

        for (var pos = 0; pos < this.nodes.length; pos++) {
            this.svg.append("line")
                .attr("id","line"+pos)
                .attr("x1",parseInt(this.nodes[pos][0]))
                .attr("x2",parseInt(this.nodes[(pos+1)%nodes.length][0]))
                .attr("y1",parseInt(this.nodes[pos][1]))
                .attr("y2",parseInt(this.nodes[(pos+1)%nodes.length][1]))
                .style("stroke", "rgba(0,0,0,0.5)");
        }

        for(var pos = 0; pos < this.nodes.length; pos++) {
            this.svg.append("circle")
            .attr("id", "node"+pos)
            .attr("cx", parseInt(this.nodes[pos][0]))
            .attr("cy", parseInt(this.nodes[pos][1]))
            .attr("r", 5)
            .style("fill", "rgba(0,128,0,0.5)");
            // console.log(this.nodes[pos][1])
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.nodes[pos][0]))));
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.nodes[pos][1]))));
        }

        // this.svg.selectAll("circle")
        //     .attr("class", "nodes")
        //     .data(this.nodes)
        //     .enter()
        //         .append("circle")
        //         .attr("r", 5)
        //         .attr("cx", function (d) { return d[0]; })
        //         .attr("cy", function (d) { return d[1]; })
        //         .attr("fill", "blue")
        // //throw new Error("Stop");
    }


    // correct_pos_x(pos) {
    //     return (pos*4)*1000+this.width/4;
    // }

    // correct_pos_y(pos) {
    //     return Math.pow(pos,8)*450;
    // }

    update(nodes, cities, current_epoch) {
        // console.log("nodes before");
        // for (var i=0; i < nodes.length; i++) {
        //     console.log((i+1)+" "+nodes[i][0]+ ":" + nodes[i][1]);
        // }
        // console.log("cities before");
        // for (var i=0; i < cities.length; i++) {
        //     console.log((i+1)+" "+cities[i][0]+ ":" + cities[i][1]);
        // }
        
        console.log("enter "+current_epoch);
        this.nodes = this.get_scaled(nodes, this.width, this.height);
        this.cities = this.get_scaled(cities, this.width, this.height);

        // console.log("nodes after");
        // for (var i=0; i < this.nodes.length; i++) {
        //     console.log((i+1)+" "+this.nodes[i][0]+ ":" + this.nodes[i][1]);
        // }
        // console.log("cities after");
        // for (var i=0; i < this.cities.length; i++) {
        //     console.log((i+1)+" "+this.cities[i][0]+ ":" + this.cities[i][1]);
        // }
        
        for(var pos = 0; pos < this.cities.length; pos++) {
            this.svg.select("#city"+pos)
            .attr("cx", parseInt(this.cities[pos][0]))
            .attr("cy", parseInt(this.cities[pos][1]))
            .attr("r", 10)
            .style("fill", "red")
            .style("stroke", "black");
            
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.cities[pos][0]))));
            //console.log(parseInt(this.correct_pos_y(parseFloat(this.cities[pos][1]))));
        }
        for (var pos = 0; pos < this.nodes.length; pos++) {
            this.svg.select("#line"+pos)
                .attr("x1",parseInt(this.nodes[pos][0]))
                .attr("x2",parseInt(this.nodes[(pos+1)%nodes.length][0]))
                .attr("y1",parseInt(this.nodes[pos][1]))
                .attr("y2",parseInt(this.nodes[(pos+1)%nodes.length][1]))
                .style("stroke", "rgba(0,0,0,0.5)");
        }

        for(var pos = 0; pos < this.nodes.length; pos++) {
            this.svg.select("#node"+pos)
            .attr("cx", parseInt(this.nodes[pos][0]))
            .attr("cy", parseInt(this.nodes[pos][1]))
            .attr("r", 5)
            .style("fill", "rgba(0,128,0,0.5)");
            // console.log(this.nodes[pos][1])
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.nodes[pos][0]))));
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.nodes[pos][1]))));
        }

        // this.svg
        //     .selectAll(".nodes")
        //     .data(this.nodes)
        //     .attr("cx", function (d) { return d[0]; })
        //     .attr("cy", function (d) { return d[1]; });

        console.log("exit "+current_epoch);
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
