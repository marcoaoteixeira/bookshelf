const base = require('./webpack.base.conf');
const ESLintPlugin = require('eslint-webpack-plugin');

base.mode = 'development';
base.externals = [
  function (context, request, callback) {
    if (request[0] === '.') {
      callback();
    } else {
      callback(null, 'require(\"' + request + '\")');
    }
  }
];
base.plugins = [new ESLintPlugin()]

module.exports = base;
