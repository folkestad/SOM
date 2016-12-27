var data = require("./data_parser.js");
var normalizer = require("./normalize.js");
var som = require("./self_organizing_map.js");


function start_som(number_of_neurons, learning_rate, epochs, town) {
    var cities = data.get_data(town);
    var test = [];
    for(var i = 0; i < 200; i++) {
        test.push([Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)]);
    }

    var normalized_cities = normalizer.normalize(cities);
    const self_organizing_map = new som.Self_Organizing_Map(
        parseInt(number_of_neurons), 
        parseFloat(learning_rate), 
        parseInt(epochs), 
        true, 
        true);
    self_organizing_map.train_neurons(normalized_cities);
}

module.exports = { start_som: start_som }


