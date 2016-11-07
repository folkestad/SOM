function normalize(data) {
    var normalized_data = []
    var x_max = Math.max.apply(null, data[0]);
    var x_min = Math.min.apply(null, data[0]);
    var y_max = Math.max.apply(null, data[1]);
    var y_min = Math.min.apply(null, data[1]);
    for(i=0; i < data.length; i++) {
        normalized_data.push([normalize_point(data[i][0], x_min, x_max), normalize_point(data[i][1], y_min, y_max)]);
    }
    return normalized_data;
}

function normalize_point(value, min_val, max_val) {
    return (value - min_val) / (max_val - min_val)
}

function denormalize_to_screen(data, width, height) {
    var denormalized_data = []
    var temp_data = [];
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i]);
        temp_data.push([parseFloat(data[i][0]),parseFloat(data[i][1])]);
    }
    var x_max = Math.max.apply(null, temp_data[0]);
    var x_min = Math.min.apply(null, temp_data[0]);
    var y_max = Math.max.apply(null, temp_data[1]);
    var y_min = Math.min.apply(null, temp_data[1]);
    for(var i=0; i < temp_data.length; i++) {
        var x = denormalize_point_to_screen(temp_data[i][0], x_min, x_max, width);
        //console.log(x);
        var y = denormalize_point_to_screen(temp_data[i][1], y_min, y_max, height);
        //console.log(y);
        denormalized_data.push([x, y]);
    }
    return denormalized_data;
}

function denormalize_point_to_screen(value, min_val, max_val, dim) {
    return (dim*(value-min_val))/(max_val-min_val);
}

function denormalize_point(value, min_val, max_val, dim) {
    var denormalized = (max_val - min_val) / (value - min_val)

}

module.exports = { normalize: normalize, denormalize_to_screen: denormalize_to_screen}