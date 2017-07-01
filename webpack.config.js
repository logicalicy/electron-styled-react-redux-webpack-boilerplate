const webpack = require('webpack');
const path = require('path');

const config = {
    entry: [
        './src/index',
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.png|\.svg$/,
                loaders: ['file-loader']
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            'actions': path.resolve(__dirname, 'src/actions'),
            'constants': path.resolve(__dirname, 'src/constants'),
            'components': path.resolve(__dirname, 'src/components'),
            'containers': path.resolve(__dirname, 'src/containers'),
            'reducers': path.resolve(__dirname, 'src/reducers'),
            'sagas': path.resolve(__dirname, 'src/sagas'),
            'store': path.resolve(__dirname, 'src/store'),
        },
    },
    target: 'electron-renderer',
};

module.exports = config;
