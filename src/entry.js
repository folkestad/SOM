var data = require("./data_parser.js");
var normalizer = require("./normalize.js");
var som = require("./self_organizing_map.js");

var cities = data.get_data();
var test = [];
for(var i = 0; i < 200; i++) {
    test.push([Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)]);
}

var normalized_cities = normalizer.normalize(test);

const self_organizing_map = new som.Self_Organizing_Map(normalized_cities.length*2, 0.65, 250, true, true);
self_organizing_map.train_neurons(normalized_cities);

