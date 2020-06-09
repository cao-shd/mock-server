// 配置使用 Node 语法

// 默认输入路径 src/index.js
// 默认输出路径 dist/main.js

const path = require('path');
const apiMocker = require('mocker-api');

// 在内存中生成首页 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义 html 插件
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  // 源文件路径为 /src/index.html
  template: path.join(__dirname, 'src/index.html'),
  // 生成内存首页文件 名为 index.html
  filename: 'index.html',
});

module.exports = {
  // 必须配置项 定义当前开发环境
  // 可选值: [ 'development' | 'production' ]
  // development 编译后的文件不会被压缩
  // production 编译后的文件会被压缩
  mode: 'development',
  // 使用插件
  plugins: [
    htmlWebpackPlugin,
  ],
  resolve: {
    // 省略 import 对象扩展名
    extensions: ['.js', '.jsx', '.json'],
    // 配置项目根路径用 @ 表示
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    hot: true,
    open: true,
    before(app) {
      apiMocker(app, path.join(__dirname, './src/mock/index.js'));
    },
  },

};
