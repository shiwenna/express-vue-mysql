/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-03-21 11:23:18
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-27 17:09:57
 */
import express from 'express'
import webpack from 'webpack'
import path from 'path'
const bodyParser = require('body-parser');//post body属性
var logger = require('tracer').console();
var history = require('connect-history-api-fallback');

const userApi = require('./api/userApi')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

// app.use(history());

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/user',userApi)
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

// app.use('/static', express.static(path.join(__dirname, '../../dist/static')))

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, '../../dist/index.html'));
// });




// Serve the files on port 3000.
app.listen(3000, () => {
  // console.log('Example app listening on port 3000! \n');
  logger.info('Example app listening on port 3000! \n');
});