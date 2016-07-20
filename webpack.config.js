var path = require('path')

module.exports = {
  "root": "./src",
  "devServer":{
    "host": "localhost",
    "hot": true,
    "inline": true,
  },
  "hotMiddleware": {
    "reload": true
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, loader: 'file?name=[name].[ext]?[hash]' }
    ]
  },
  vue: {
    loaders: {
      css: 'style!css!autoprefixer!sass'
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['', '.js', '.vue'],
    // 别名
    alias: {
      server: path.join(__dirname, './src/app/server'),
      page: path.join(__dirname, './src/app/pages')
    }
  },
  devtool: 'inline-source-map'
}