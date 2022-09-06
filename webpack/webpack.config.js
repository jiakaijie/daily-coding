const path = require('path');

const EmitPlugin = require('./plugins/emitPlugin');
const AfterEmitPlugin = require('./plugins/afterEmitPlugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new EmitPlugin(),
    new AfterEmitPlugin()
  ]
};