var normalizer = require("./normalize.js");
// city plot

class Plot {
    constructor(nodes, cities) {
        this.svg = d3.select("body").append("svg").attr("width", 1000).attr("height", 700);
        this.width = this.svg.attr("width");
        this.height = this.svg.attr("height");

        this.nodes = normalizer.denormalize_to_screen(nodes, this.width, this.height);
        this.cities = normalizer.denormalize_to_screen(cities, this.width, this.height);


        for(var pos = 0; pos < this.cities.length; pos++) {
            this.svg.append("circle")
            .attr("id", "city"+pos)
            .attr("cx", parseInt(this.cities[pos][0]+this.width/2))
            .attr("cy", parseInt(this.cities[pos][1]-this.height/2))
            .attr("r", 5)
            .style("fill", "red");
            
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.cities[pos][0]))));
            //console.log(parseInt(this.correct_pos_y(parseFloat(this.cities[pos][1]))));
        }
        for (var pos = 0; pos < this.nodes.length; pos++) {
            this.svg.append("line")
                .attr("id","line"+pos)
                .attr("x1",parseInt(this.nodes[pos][0]+this.width/2))
                .attr("x2",parseInt(this.nodes[(pos+1)%nodes.length][0]+this.width/2))
                .attr("y1",parseInt(this.nodes[pos][1]-this.height/2))
                .attr("y2",parseInt(this.nodes[(pos+1)%nodes.length][1]-this.height/2))
                .style("stroke", "rgba(0,0,0,0.5)");
        }

        for(var pos = 0; pos < this.nodes.length; pos++) {
            this.svg.append("circle")
            .attr("id", "node"+pos)
            .attr("cx", parseInt(this.nodes[pos][0]+this.width/2))
            .attr("cy", parseInt(this.nodes[pos][1]-this.height/2))
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
        this.nodes = normalizer.denormalize_to_screen(nodes, this.width, this.height);
        this.cities = normalizer.denormalize_to_screen(cities, this.width, this.height);
        for (var i=0; i < nodes.length; i++) {
            console.log((i+1)+" "+nodes[i][0]+ ":" + nodes[i][1]);
        }
        // for (var i=0; i < cities.length; i++) {
        //     console.log((i+1)+" "+cities[i][0]+ ":" + cities[i][1]);
        // }
        
        for(var pos = 0; pos < cities.length; pos++) {
            this.svg.select("#city"+pos)
            .attr("cx", parseInt(cities[pos][0]+this.width/2))
            .attr("cy", parseInt(cities[pos][1]-this.height/2))
            .attr("r", 5)
            .style("fill", "red");
            
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.cities[pos][0]))));
            //console.log(parseInt(this.correct_pos_y(parseFloat(this.cities[pos][1]))));
        }
        for (var pos = 0; pos < nodes.length; pos++) {
            this.svg.select("#line"+pos)
                .attr("x1",parseInt(nodes[pos][0]+this.width/2))
                .attr("x2",parseInt(nodes[(pos+1)%nodes.length][0]+this.width/2))
                .attr("y1",parseInt(nodes[pos][1]-this.height/2))
                .attr("y2",parseInt(nodes[(pos+1)%nodes.length][1]-this.height/2))
                .style("stroke", "rgba(0,0,0,0.5)");
        }

        for(var pos = 0; pos < nodes.length; pos++) {
            this.svg.select("#node"+pos)
            .attr("cx", parseInt(nodes[pos][0]+this.width/2))
            .attr("cy", parseInt(nodes[pos][1]-this.height/2))
            .attr("r", 5)
            .style("fill", "rgba(0,128,0,0.5)");
            // console.log(this.nodes[pos][1])
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.nodes[pos][0]))));
            //console.log(parseInt(this.correct_pos_x(parseFloat(this.nodes[pos][1]))));
        }
    }
}

module.exports = { Plot: Plot }
