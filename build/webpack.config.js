const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function layaResolve(file) {
  return './bin/libs/' + file
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.js', '.ts']
  },
  entry: {
    laya: [
      // 核心包，封装了显示对象渲染，事件，时间管理，时间轴动画，缓动，消息交互,socket，本地存储，鼠标触摸，声音，加载，颜色滤镜，位图字体等
      'laya.core.js',
      // 封装了webgl渲染管线，如果使用webgl渲染，可以在初始化时调用Laya.init(1000,800,laya.webgl.WebGL)
      'laya.webgl.js',
      // 提供tileMap解析支持
      'laya.tiledmap.js',
      // 提供了制作UI的各种组件实现
      'laya.ui.js',
      // 包含更多webgl滤镜，比如外发光，阴影，模糊以及更多
      // 'laya.filter.js',
      // 封装了html动态排版功能
      // 'laya.html.js',
      // 粒子类库
      // 'laya.particle.js',
      // 是动画模块，包含了swf动画，骨骼动画等
      // 'laya.ani.js',
      // 提供了微信小游戏的适配
      // 'laya.wxmini.js'
    ].map(layaResolve),
    app: [
      './src/ui/layaUI.max.all.ts',
      './src/main.ts'
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('bin')]
      },
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        include: [resolve('src')]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // 'Laya': [
      //   resolve('bin/libs/laya.core.js')
      // ]
      // 'laya': [
      //   resolve('bin/libs/laya.core.js')
      // ]
    }),
    new CleanWebpackPlugin([resolve('dist')], {
      allowExternal: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'bin/index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: resolve('bin'),
        to: resolve('dist'),
        ignore: ['libs/**']
      }
    ])
  ]
};
