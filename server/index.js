/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-03-21 11:23:18
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-15 10:56:22
 */
import express from 'express'
import webpack from 'webpack'
import path from 'path'
var logger = require('tracer').console();
var history = require('connect-history-api-fallback');

const userApi = require('./api/userApi')

const app = express();

app.use(express.json());
app.use(express.urlencoded())

// app.use(history());

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(express.static(path.join(__dirname, 'public')))
// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
app.use('/api/user', userApi)
//跟顺序有关todo
app.use(history());

if (app.get('env') === 'development') {

  const config = require('@vue/cli-service/webpack.config');
  const compiler = webpack(config);

  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler));

  // app.use(require("webpack-hot-middleware")(compiler, {
  //   log: console.log,
  //   path: '/__webpack_hmr',
  //   heartbeat: 10 * 1000
  // }));

}
if (app.get('env') === 'production') {

  app.use('/', express.static(path.join(__dirname, '../dist')))
  // app.get("/", function(req, res) {
  //   res.sendFile('index.html', { root: path.join(__dirname, '../dist') });
  // })
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'), function (err) {
      if (err) {
        logger.info(err);
        res.status(err.status).end();
      }
    }
    );
  });

}
//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})
// Serve the files on port 3000.
app.listen(3000, () => {
  // console.log('Example app listening on port 3000! \n');
  logger.info('Example app listening on port 3000! \n');
});