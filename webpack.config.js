const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, './'),
    clean: false
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            reserved: ['VANTA', 'feather']
          },
          compress: {
            drop_console: false,
            drop_debugger: true,
            pure_funcs: ['console.log']
          },
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  devtool: 'source-map',
  mode: 'production'
};
