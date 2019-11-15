const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html入口，可配置html相关内容
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-transform-runtime"
            ]
          }
        },
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      { 
        filename: 'index.html', 
        template: 'src/index.html',
        minify: { // 压缩HTML文件
          removeComments: true, // 移除HTML中的注释
          collapseWhitespace: true, // 删除空白符与换行符
          minifyCSS: true// 压缩内联css
        },
      }
    ),
  ]
}