function normalize(data) {
    var normalized_data = []
    // console.log("data before");
    // for (var j = 0; j < data.length; j++) {
    //     console.log((j+1) + " " + data[j][0] + ":" + data[j][1]);
    // }
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

    // console.log(" ");
    // console.log("x_max "+x_max);
    // console.log("x_min "+x_min);
    // console.log("y_max "+y_max);
    // console.log("y_min "+y_min);
    // console.log(" ");

    for(i=0; i < data.length; i++) {
        normalized_data.push([normalize_point(data[i][0], x_min, x_max), normalize_point(data[i][1], y_min, y_max)]);
    }

    // console.log("data after");
    // for (var j = 0; j < normalized_data.length; j++) {
    //     console.log((j+1) + " " + normalized_data[j][0] + ":" + normalized_data[j][1]);
    // }
    return normalized_data;
}

function normalize_point(value, min_val, max_val) {
    return (value - min_val) / (max_val - min_val);
}

// function denormalize_to_screen(data, width, height) {
//     var denormalized_data = []
//     console.log("data before");
//     for (var j = 0; j < data.length; j++) {
//         console.log((j+1) + " " + data[j][0] + ":" + data[j][1]);
//     }
//     var x_max = data[0][0];
//     var x_min = data[0][0];
//     var y_max = data[0][1];
//     var y_min = data[0][1];
//     for (var i = 0; i < data.length; i++) {
//         //console.log(data[i]);
//         //temp_data.push([parseFloat(data[i][0]),parseFloat(data[i][1])]);
//         if (data[i][0] > x_max) { x_max = data[i][0] };
//         if (data[i][0] < x_min) { x_min = data[i][0] };
//         if (data[i][1] > y_max) { y_max = data[i][1] };
//         if (data[i][1] < y_min) { y_min = data[i][1] };
//     }
//     console.log(" ");
//     console.log("x_max "+x_max);
//     console.log("x_min "+x_min);
//     console.log("y_max "+y_max);
//     console.log("y_min "+y_min);
//     console.log(" ");

//     for(var i=0; i < data.length; i++) {
//         var x = denormalize_point_to_screen(data[i][0], x_min, x_max, width);
//         //console.log(x);
//         var y = denormalize_point_to_screen(data[i][1], y_min, y_max, height);
//         //console.log(y);
//         denormalized_data.push([x, y]);
//     }
//     console.log("data after");
//     for (var j = 0; j < denormalized_data.length; j++) {
//         console.log((j+1) + " " + denormalized_data[j][0] + ":" + denormalized_data[j][1]);
//     }
//     return denormalized_data;
// }

// function denormalize_point_to_screen(value, min_val, max_val, dim) {
//     var delta_err = 0.0000001;
//     return ((max_val - min_val) / (value - min_val));
// }

// function denormalize_point(value, min_val, max_val, dim) {
//     return ((max_val - min_val) / (value - min_val));

// }

module.exports = { normalize: normalize }