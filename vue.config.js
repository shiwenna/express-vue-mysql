/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-03-21 11:23:18
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-24 16:46:19
 */
const path = require('path');

// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
module.exports = {
  // publicPath: './',
  // assetsDir: 'static',
  chainWebpack: config => {
    let temp = config
      .entry('app')
      .clear()
      .add(path.join(__dirname, './src/main.js'));
    if (process.env.NODE_ENV === 'development') {
      temp.add("webpack-hot-middleware/client");
    }
  }
};