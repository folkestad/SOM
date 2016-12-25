/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var data = __webpack_require__(1);
	var normalizer = __webpack_require__(3);
	var som = __webpack_require__(4);

	var cities = data.get_data();
	var test = [];
	for(var i = 0; i < 200; i++) {
	    test.push([Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)]);
	}

	var normalized_cities = normalizer.normalize(test);

	const self_organizing_map = new som.Self_Organizing_Map(normalized_cities.length*2, 0.65, 250, true, true);
	self_organizing_map.train_neurons(normalized_cities);



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	

	function parse_data_from_file() {
	    var cities = [];
	    var raw_data = __webpack_require__(2);
	    var raw_data_array = raw_data.djibouti.split(" ");
	    for(i=0; i<raw_data_array.length; i+=3) {
	        cities.push([parseInt(raw_data_array[i+1]), parseInt(raw_data_array[i+2])])
	    }
	    return cities;
	}

	module.exports = { get_data: parse_data_from_file}





/***/ },
/* 2 */
/***/ function(module, exports) {

	
	var djibouti = "1 11003.611100 42102.500000 2 11108.611100 42373.888900 3 11133.333300 42885.833300 4 11155.833300 42712.500000 5 11183.333300 42933.333300 6 11297.500000 42853.333300 7 11310.277800 42929.444400 8 11416.666700 42983.333300 9 11423.888900 43000.277800 10 11438.333300 42057.222200 11 11461.111100 43252.777800 12 11485.555600 43187.222200 13 11503.055600 42855.277800 14 11511.388900 42106.388900 15 11522.222200 42841.944400 16 11569.444400 43136.666700 17 11583.333300 43150.000000 18 11595.000000 43148.055600 19 11600.000000 43150.000000 20 11690.555600 42686.666700 21 11715.833300 41836.111100 22 11751.111100 42814.444400 23 11770.277800 42651.944400 24 11785.277800 42884.444400 25 11822.777800 42673.611100 26 11846.944400 42660.555600 27 11963.055600 43290.555600 28 11973.055600 43026.111100 29 12058.333300 42195.555600 30 12149.444400 42477.500000 31 12286.944400 43355.555600 32 12300.000000 42433.333300 33 12355.833300 43156.388900 34 12363.333300 43189.166700 35 12372.777800 42711.388900 36 12386.666700 43334.722200 37 12421.666700 42895.555600 38 12645.000000 42973.333300";

	var qatar = "1 24748.3333 50840.0000 2 24758.8889 51211.9444 3 24827.2222 51394.7222 4 24904.4444 51175.0000 5 24996.1111 51548.8889 6 25010.0000 51039.4444 7 25030.8333 51275.2778 8 25067.7778 51077.5000 9 25100.0000 51516.6667 10 25103.3333 51521.6667 11 25121.9444 51218.3333 12 25150.8333 51537.7778 13 25158.3333 51163.6111 14 25162.2222 51220.8333 15 25167.7778 51606.9444 16 25168.8889 51086.3889 17 25173.8889 51269.4444 18 25210.8333 51394.1667 19 25211.3889 51619.1667 20 25214.1667 50807.2222 21 25214.4444 51378.8889 22 25223.3333 51451.6667 23 25224.1667 51174.4444 24 25233.3333 51333.3333 25 25234.1667 51203.0556 26 25235.5556 51330.0000 27 25235.5556 51495.5556 28 25242.7778 51428.8889 29 25243.0556 51452.5000 30 25252.5000 51559.1667 31 25253.8889 51535.2778 32 25253.8889 51549.7222 33 25256.9444 51398.8889 34 25263.6111 51516.3889 35 25265.8333 51545.2778 36 25266.6667 50969.1667 37 25266.6667 51483.3333 38 25270.5556 51532.7778 39 25270.8333 51505.8333 40 25270.8333 51523.0556 41 25275.8333 51533.6111 42 25277.2222 51547.7778 43 25278.3333 51525.5556 44 25278.3333 51541.3889 45 25279.1667 51445.5556 46 25281.1111 51535.0000 47 25281.3889 51512.5000 48 25283.3333 51533.3333 49 25283.6111 51546.6667 50 25284.7222 51555.2778 51 25286.1111 51504.1667 52 25286.1111 51534.1667 53 25286.6667 51533.3333 54 25287.5000 51537.7778 55 25288.0556 51546.6667 56 25290.8333 51528.3333 57 25291.9444 51424.4444 58 25292.5000 51520.8333 59 25298.6111 51001.6667 60 25300.8333 51394.4444 61 25306.9444 51507.7778 62 25311.9444 51003.0556 63 25313.8889 50883.3333 64 25315.2778 51438.6111 65 25316.6667 50766.6667 66 25320.5556 51495.5556 67 25322.5000 51507.7778 68 25325.2778 51470.0000 69 25326.6667 51350.2778 70 25337.5000 51425.0000 71 25339.1667 51173.3333 72 25340.5556 51293.6111 73 25341.9444 51507.5000 74 25358.8889 51333.6111 75 25363.6111 51281.1111 76 25368.6111 51226.3889 77 25374.4444 51436.6667 78 25377.7778 51294.7222 79 25396.9444 51422.5000 80 25400.0000 51183.3333 81 25400.0000 51425.0000 82 25404.7222 51073.0556 83 25416.9444 51403.8889 84 25416.9444 51457.7778 85 25419.4444 50793.6111 86 25429.7222 50785.8333 87 25433.3333 51220.0000 88 25440.8333 51378.0556 89 25444.4444 50958.3333 90 25451.3889 50925.0000 91 25459.1667 51316.6667 92 25469.7222 51397.5000 93 25478.0556 51362.5000 94 25480.5556 50938.8889 95 25483.3333 51383.3333 96 25490.5556 51373.6111 97 25492.2222 51400.2778 98 25495.0000 50846.6667 99 25495.0000 50965.2778 100 25497.5000 51485.2778 101 25500.8333 50980.5556 102 25510.5556 51242.2222 103 25531.9444 51304.4444 104 25533.3333 50977.2222 105 25538.8889 51408.3333 106 25545.8333 51387.5000 107 25549.7222 51431.9444 108 25550.0000 51433.3333 109 25560.2778 51158.6111 110 25566.9444 51484.7222 111 25567.5000 50958.8889 112 25574.7222 51486.3889 113 25585.5556 51151.3889 114 25609.4444 51092.2222 115 25610.2778 51475.2778 116 25622.5000 51454.4444 117 25645.8333 51450.0000 118 25650.0000 51372.2222 119 25666.9444 51174.4444 120 25683.8889 51505.8333 121 25686.3889 51468.8889 122 25696.1111 51260.8333 123 25700.8333 51584.7222 124 25708.3333 51591.6667 125 25716.6667 51050.0000 126 25717.5000 51057.7778 127 25723.0556 51004.1667 128 25734.7222 51547.5000 129 25751.1111 51449.1667 130 25751.9444 50920.8333 131 25758.3333 51395.8333 132 25765.2778 51019.7222 133 25772.2222 51483.3333 134 25775.8333 51023.0556 135 25779.1667 51449.7222 136 25793.3333 51409.4444 137 25808.3333 51060.5556 138 25816.6667 51133.3333 139 25823.6111 51152.5000 140 25826.6667 51043.8889 141 25829.7222 51245.2778 142 25833.3333 51072.2222 143 25839.1667 51465.2778 144 25847.7778 51205.8333 145 25850.0000 51033.3333 146 25856.6667 51083.3333 147 25857.5000 51298.8889 148 25857.5000 51441.3889 149 25866.6667 51066.6667 150 25867.7778 51205.5556 151 25871.9444 51354.7222 152 25872.5000 51258.3333 153 25880.8333 51221.3889 154 25883.0556 51185.2778 155 25888.0556 51386.3889 156 25900.0000 51000.0000 157 25904.1667 51201.6667 158 25928.3333 51337.5000 159 25937.5000 51313.3333 160 25944.7222 51456.3889 161 25950.0000 51066.6667 162 25951.6667 51349.7222 163 25957.7778 51075.2778 164 25958.3333 51099.4444 165 25966.6667 51283.3333 166 25983.3333 51400.0000 167 25983.6111 51328.0556 168 26000.2778 51294.4444 169 26008.6111 51083.6111 170 26016.6667 51333.3333 171 26021.6667 51366.9444 172 26033.3333 51116.6667 173 26033.3333 51166.6667 174 26033.6111 51163.8889 175 26033.6111 51200.2778 176 26048.8889 51056.9444 177 26050.0000 51250.0000 178 26050.2778 51297.5000 179 26050.5556 51135.8333 180 26055.0000 51316.1111 181 26067.2222 51258.6111 182 26074.7222 51083.6111 183 26076.6667 51166.9444 184 26077.2222 51222.2222 185 26078.0556 51361.6667 186 26083.6111 51147.2222 187 26099.7222 51161.1111 188 26108.0556 51244.7222 189 26116.6667 51216.6667 190 26123.6111 51169.1667 191 26123.6111 51222.7778 192 26133.3333 51216.6667 193 26133.3333 51300.0000 194 26150.2778 51108.0556";

	module.exports = {djibouti: djibouti , qatar: qatar }

/***/ },
/* 3 */
/***/ function(module, exports) {

	function normalize(data) {
	    var normalized_data = [];
	    var x_max = data[0][0];
	    var x_min = data[0][0];
	    var y_max = data[0][1];
	    var y_min = data[0][1];
	    for (var i = 0; i < data.length; i++) {
	        if (data[i][0] > x_max) { x_max = data[i][0] };
	        if (data[i][0] < x_min) { x_min = data[i][0] };
	        if (data[i][1] > y_max) { y_max = data[i][1] };
	        if (data[i][1] < y_min) { y_min = data[i][1] };
	    }

	    for(i=0; i < data.length; i++) {
	        normalized_data.push([normalize_point(data[i][0], x_min, x_max), normalize_point(data[i][1], y_min, y_max)]);
	    }
	    return normalized_data;
	}

	function normalize_point(value, min_val, max_val) {
	    return (value - min_val) / (max_val - min_val);
	}

	module.exports = { normalize: normalize }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var plot = __webpack_require__(5);

	class Self_Organizing_Map {

	    constructor(number_of_neurons, learning_rate, epochs, learning_exp_decay, radius_exp_decay) {
	 
	        // neurons
	        this.number_of_neurons = number_of_neurons;
	        this.neurons = [];
	        for(var i = 0; i < number_of_neurons; i++) {
	            this.neurons.push([Math.random(), Math.random()]);
	        }

	        // learning rate
	        this.learning_rate = learning_rate;
	        this.learning_exp_decay = learning_exp_decay;
	        this.current_learning_rate = this.learning_rate;

	        // epochs
	        this.epochs = epochs;
	        this.current_epoch = 1;

	        // radius
	        this.radius_exp_decay = radius_exp_decay;
	        this.radius = Math.ceil(number_of_neurons/10);
	        this.current_radius = this.radius;

	    }

	    train_neurons(input) {
	        var plotter = new plot.Plot(this.neurons, input);
	        for(var epoch = 0; epoch < this.epochs; epoch++) {
	            for(var element_pos = 0; element_pos < input.length; element_pos++) {
	                var output_signals = this.integrate_and_fire(input[element_pos]);
	                var winning_neuron_pos = this.find_winner_pos(output_signals);
	                this.update_neurons(winning_neuron_pos, input[element_pos]);
	            }
	            this.adjust_radius();
	            this.adjust_learning_rate();
	            console.log("Epoch: "+this.current_epoch);
	            if(epoch % 50 == 0) {
	                plotter.update(this.neurons, input, this.current_epoch);
	            }
	            this.current_epoch += 1;
	        }
	    }

	    find_winner_pos(output_signals) {
	        var index = 0;
	        for(i = 0; i < output_signals.length; i++) {
	            if (output_signals[i] < output_signals[index]) {
	                index = i;
	            }
	        }
	        return index;
	    }

	    integrate_and_fire(input_element) {
	        var output = [];
	        for(i = 0; i < this.number_of_neurons; i++) {
	            output.push(this.dist(input_element, this.neurons[i]));
	        }
	        return output;
	    }

	    dist(input_element, neuron) {
	        return Math.abs(
	            Math.sqrt(
	                Math.pow((input_element[0]-neuron[0]), 2) + Math.pow((input_element[1]-neuron[1]), 2)
	            )
	        );
	    }

	    update_neurons(winning_neuron_pos, input_element) {
	        var neurons_pos = [];
	        for(var i=winning_neuron_pos-this.current_radius; i < winning_neuron_pos+this.current_radius+1; i++) {
	            var mod_i = (i+this.number_of_neurons)%this.number_of_neurons
	            neurons_pos.push(mod_i);
	        }
	        for(var pos=0; pos < neurons_pos.length; pos++) {
	            this.train_neuron(neurons_pos[pos], input_element, 1.0);
	        }
	    }

	    train_neuron(pos, input_element, learning_factor) {
	        // regulate learning by learning formula: Wij = Wij + f*(Pj-Wij)
	        const n_x = this.neurons[pos][0];
	        const n_y = this.neurons[pos][1];
	        var trained_x = n_x + this.current_learning_rate * learning_factor * (input_element[0] - n_x);
	        var trained_y = n_y + this.current_learning_rate * learning_factor * (input_element[1] - n_y);
	        this.neurons[pos][0] = trained_x;
	        this.neurons[pos][1] = trained_y;
	    }

	    adjust_radius() {
	        if (this.radius_exp_decay) {
	            this.current_radius = parseInt(Math.round(this.radius * Math.pow(0.95, this.current_epoch)));
	        }
	    }

	    adjust_learning_rate() {
	        if (this.learning_exp_decay) {
	            this.current_learning_rate = this.learning_rate * Math.pow(0.95, this.current_epoch);
	        }
	    }
	}

	module.exports = { Self_Organizing_Map: Self_Organizing_Map }


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var normalizer = __webpack_require__(3);
	// city plot

	class Plot {
	    constructor(nodes, cities) {
	        this.svg = d3.select("body").append("svg")
	            .attr("width", 1415)
	            .attr("height", 700)
	            .style("border", "1px solid grey");

	        this.width = this.svg.attr("width");
	        this.height = this.svg.attr("height");

	        this.update(nodes, cities, 0);
	    }

	    update(nodes, cities, current_epoch) {
	        console.log("enter "+current_epoch);
	        
	        var nodes_data = this.get_scaled(nodes, this.width, this.height);
	        var cities_data = this.get_scaled(cities, this.width, this.height);

	        // ====== CITIES ======
	        var city_circles = this.svg.selectAll(".city")
	            .data(cities_data);

	        city_circles
	            .attr("cx", function(d) { return d[0] })
	            .attr("cy", function(d) { return d[1] });

	        city_circles
	            .enter().append("circle")
	                .attr("class", "city")
	                .attr("cx", function(d) { return d[0] })
	                .attr("cy", function(d) { return d[1] })
	                .attr("r", 10)
	                .style("fill", "rgba(128,0,0,0.5)");
	                //.style("stroke", "black");
	        
	        //city_circles.exit().remove();

	        // ====== LINES ======
	        var lines = this.svg.selectAll(".path")
	            .data(nodes_data);

	        lines
	            .transition()
	                .duration(3000)
	            .attr("x1", function(d) { return d[0] })
	            .attr("x2", function(d, i) { return nodes_data[(i+1)%nodes_data.length][0] })
	            .attr("y1", function(d) { return d[1] })
	            .attr("y2", function(d, i) { return nodes_data[(i+1)%nodes_data.length][1] });

	        lines
	            .enter().append("line")
	                .attr("class", "path")
	                .attr("x1", function(d) { return d[0] })
	                .attr("x2", function(d, i) { return nodes_data[(i+1)%nodes_data.length][0] })
	                .attr("y1", function(d) { return d[1] })
	                .attr("y2", function(d, i) { return nodes_data[(i+1)%nodes_data.length][1] })
	                .style("stroke", "rgba(0,0,0,0.5)");
	        
	        //lines.exit().remove();

	        // ====== NODES ======
	        var node_circles = this.svg.selectAll(".node")
	            .data(nodes_data);
	        
	        node_circles
	            .transition()
	                .duration(3000)
	            .attr("cx", function(d) { return d[0] })
	            .attr("cy", function(d) { return d[1] });

	        node_circles
	            .enter().append("circle")
	                .attr("class", "node")
	                .attr("cx", function(d) { return d[0] })
	                .attr("cy", function(d) { return d[1] })
	                .attr("r", 5)
	                .style("fill", "rgba(0,128,0,0.5)");
	        
	        //node_circles.exit().remove();
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


/***/ }
/******/ ]);