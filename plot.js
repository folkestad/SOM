var normalizer = require("./normalize.js");
// city plot

class Plot {
    constructor(nodes, cities) {
        this.svg = d3.select("body").append("svg").attr("width", 1000).attr("height", 700);
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
            .attr("r", 7)
            .style("fill", "red");
            
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
    }


    // correct_pos_x(pos) {
    //     return (pos*4)*1000+this.width/4;
    // }

    // correct_pos_y(pos) {
    //     return Math.pow(pos,8)*450;
    // }

    update(nodes, cities) {
        // console.log("nodes before");
        // for (var i=0; i < nodes.length; i++) {
        //     console.log((i+1)+" "+nodes[i][0]+ ":" + nodes[i][1]);
        // }
        // console.log("cities before");
        // for (var i=0; i < cities.length; i++) {
        //     console.log((i+1)+" "+cities[i][0]+ ":" + cities[i][1]);
        // }

        nodes = this.get_scaled(nodes, this.width, this.height);
        cities = this.get_scaled(cities, this.width, this.height);

        // console.log("nodes after");
        // for (var i=0; i < this.nodes.length; i++) {
        //     console.log((i+1)+" "+this.nodes[i][0]+ ":" + this.nodes[i][1]);
        // }
        // console.log("cities after");
        // for (var i=0; i < this.cities.length; i++) {
        //     console.log((i+1)+" "+this.cities[i][0]+ ":" + this.cities[i][1]);
        // }
        
        for(var pos = 0; pos < cities.length; pos++) {
            this.svg.select("#city"+pos)
            .attr("cx", parseInt(cities[pos][0]))
            .attr("cy", parseInt(cities[pos][1]))
            .attr("r", 5)
            .style("fill", "red");
            
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.cities[pos][0]))));
            //console.log(parseInt(this.correct_pos_y(parseFloat(this.cities[pos][1]))));
        }
        for (var pos = 0; pos < nodes.length; pos++) {
            this.svg.select("#line"+pos)
                .attr("x1",parseInt(nodes[pos][0]))
                .attr("x2",parseInt(nodes[(pos+1)%nodes.length][0]))
                .attr("y1",parseInt(nodes[pos][1]))
                .attr("y2",parseInt(nodes[(pos+1)%nodes.length][1]))
                .style("stroke", "rgba(0,0,0,0.5)");
        }

        for(var pos = 0; pos < nodes.length; pos++) {
            this.svg.select("#node"+pos)
            .attr("cx", parseInt(nodes[pos][0]))
            .attr("cy", parseInt(nodes[pos][1]))
            .attr("r", 5)
            .style("fill", "rgba(0,128,0,0.5)");
            // console.log(this.nodes[pos][1])
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.nodes[pos][0]))));
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.nodes[pos][1]))));
        }
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
        var scale_x = d3.scaleLinear().domain([x_min, x_max]).range([25, width-25]);
        var scale_y = d3.scaleLinear().domain([y_min, y_max]).range([25, height-25]);
        for (var i = 0; i < nodes.length; i++) {
            scaled_values.push([scale_x(nodes[i][0]),scale_y(nodes[i][1])]);
        }
        return scaled_values;
    }
}

module.exports = { Plot: Plot }
