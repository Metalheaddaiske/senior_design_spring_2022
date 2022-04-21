const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: 'raw-loader',
            
          }
        }
      ],
    },
    
    resolve: {
        extensions: ['.html', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin()],
  };