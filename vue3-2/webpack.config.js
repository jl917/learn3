const wpp_html = require('html-webpack-plugin');
const wpp_css = require("mini-css-extract-plugin")
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/dist/pluginWebpack4').default

const path = require('path');

let config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: [".js", ".vue", ".json"]
  },
  mode:'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(vue)$/,
        loader: "vue-loader"
      },
      {
        test: /\.(css|styl)$/,
        use: [
          wpp_css.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new wpp_css({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new wpp_html({
      title: 'title',
      filename: 'index.html',
      template: './src/app.html',

    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all'
    }
  }
}

if(process.env.NODE_ENV === 'development'){
  config = Object.assign(config, {
    devtool: "source-map",
    mode:'development',
    devServer: {
      contentBase: './dist',
      host: 'localhost',//'localhost',//host: '192.168.0.57',
      hot: true,
      port: 8888
    },
  })
}

module.exports = config;