/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-03-21 11:23:18
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-27 15:23:27
 */
const path = require('path');

// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
module.exports = {
  // publicPath: './',
  // assetsDir: 'static',
  devServer: {
    disableHostCheck: true,
    clientLogLevel: 'warning',
    // 代理器中设置/api,项目中请求路径为/api的替换为target
    proxy: {
      '/api': {
        target: 'http://192.168.30.29:3000/api/',
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
        //pathRewrite方法重写url
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
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