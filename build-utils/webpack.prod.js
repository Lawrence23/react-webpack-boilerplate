const commonPaths = require('./common-paths');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: './src/assets', to: './src/assets' },
]);

const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'static/[name].[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions'
                    }
                  }
                }
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.(jpe?g|png|gif|eot|svg|otf)$/i,
        use: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
      },
      {
        test: /\.otf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&mimetype=application/font-otf&name=fonts/[name].[ext]"
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/styles.[contenthash].css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: './src/assets' },
    ]),
  ]
};
module.exports = config;