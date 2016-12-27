module.exports = {
    entry: "./src/entry.js",
    output: {
        path: './',
        filename: 'bundle.js',
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    target: 'node-webkit'
};