

function parse_data_from_file(country) {
    var cities = [];
    var raw_data = require("./tsp_data_points.js");
    var raw_data_array = null;
    if (country == "western_sahara") {
        raw_data_array = raw_data.western_sahara.split(" ");
    } else if (country == "djibouti") {
        raw_data_array = raw_data.djibouti.split(" ");
    } else if (country == "qatar") {
        raw_data_array = raw_data.qatar.split(" ");
    } else {
        return false;
    }
    for(i=0; i<raw_data_array.length; i+=3) {
        cities.push([parseInt(raw_data_array[i+1]), parseInt(raw_data_array[i+2])])
    }
    return cities;
}

module.exports = { get_data: parse_data_from_file}



