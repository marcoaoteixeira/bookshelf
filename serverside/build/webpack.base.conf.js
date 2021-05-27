const path = require('path');

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: ['./src/app.js'],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, './../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
