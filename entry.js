var data = require("./data_parser.js");
var normalizer = require("./normalize.js");
var som = require("./self_organizing_map.js");
var plot = require("./plot.js");


var cities = data.get_data();
// for (var i=0; i < cities.length; i++) {
//     console.log((i+1)+" "+cities[i][0]+ ":" + cities[i][1]);
// }


var normalized_cities = normalizer.normalize(cities);
console.log("Normalized");
// for (var i=0; i < normalized_cities.length; i++) {
//     console.log((i+1)+" "+normalized_cities[i][0]+ ":" + normalized_cities[i][1]);
// }

const self_organizing_map = new som.Self_Organizing_Map(normalized_cities.length*2, 0.65, 200, true, true);
//console.log(self_organizing_map);
self_organizing_map.train_neurons(normalized_cities);
// const neurons = self_organizing_map.get_neurons();
// const plotter = new plot.Plot(neurons, normalized_cities);

