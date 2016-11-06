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

module.exports = { normalize: normalize }