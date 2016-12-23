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