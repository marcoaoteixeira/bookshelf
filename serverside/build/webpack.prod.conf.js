const base = require('./webpack.base.conf');
const webpack = require('webpack');
const path = require('path');

base.mode = 'production';
base.plugins = [
    new webpack.ContextReplacementPlugin(
        /express\/lib/,
        path.resolve(__dirname, '../node_modules'),
        {
            'ejs': 'ejs'
        }
    )
];
base.stats = {
    warningsFilter: /require\.extensions/
};

module.exports = base;