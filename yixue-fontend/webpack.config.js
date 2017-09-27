var path = require('path');
var webpack = require('webpack');
// 引入ExtractTextPlugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //指定项目入口文件

  entry: [
          'react-hot-loader/patch',
          'webpack-hot-middleware/client',
          './src/index.js'
        ],

  //对输出结果描述
  output: {
    //输出路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'stage-0', 'react'],
              plugins: [['import', {"libraryName": "antd", "style": "css"}]]
            }
          }
        },
        {
            test: /-m\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                         loader: 'css-loader',
                         options: {
                             modules: true,
                             localIdentName: '[path][name]-[local]-[hash:base64:5]'
                          }
                     }
                ]
            })
        },
        {
            test: /^((?!(-m)).)*\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        },
        {
            test: /\.woff(\?.*)?$/,
            use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.woff2(\?.*)?$/,
            use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=application/font-woff2'
        },
        {
            test: /\.otf(\?.*)?$/,
            use: 'file-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=font/opentype'
        },
        {
            test: /\.ttf(\?.*)?$/,
            use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.eot(\?.*)?$/,
            use: 'file-loader?prefix=fonts/&name=[name]_[hash:8].[ext]'
        },
        {
            test: /\.svg(\?.*)?$/,
            use: 'url-loader?prefix=fonts/&name=[name]_[hash:8].[ext]&limit=10000&mimetype=image/svg+xml'
        },
        {
            test: /\.(png|jpg|jpeg)$/,
            use: 'url-loader?limit=8192'
        }
      ]
  },
  plugins: [
        new HtmlWebpackPlugin({
          title: 'My test'
        }),
        new ExtractTextPlugin('styles.css'), // 增加的行，样式将输出到styles.css
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: './build/',
    port: '8089'
  }

}
