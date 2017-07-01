const webpack = require('webpack');
const config = require('./webpack.config');

config.entry.push('webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr');
config.output.publicPath = 'http://localhost:9000/dist/';
config.plugins = [new webpack.HotModuleReplacementPlugin()];

module.exports = config;
