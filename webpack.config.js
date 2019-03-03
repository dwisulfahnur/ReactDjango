var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: {
        'index': path.join(__dirname, 'assets/js/index.jsx'),
        'custom': path.join(__dirname, 'assets/js/custom.jsx'),
    },

    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js",
    },

    plugins: [
        new BundleTracker({
            path: __dirname,
            filename: './webpack-stats.json'
        }),
    ],

    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}

        ],
    },
};