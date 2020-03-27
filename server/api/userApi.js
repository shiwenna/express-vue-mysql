/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-03-26 16:20:53
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-27 14:39:38
 */
var models = require('../mysql.config');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var sqlMap = {
  user: {
      add: 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
      select_name: 'select * from user', 
      update_user: 'update user set'
  }
}
var $sql = sqlMap;



// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '123456',
//   database : 'test2',
//   port: 3306
// });


// connection.connect(function (err) {
//   if (err) {
//     console.info('[query] - :' + err);
//       return;
//   }
//   console.info('[connection connect]  succeed!');
// });	// 创建一个mysql的线程

// connection.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
// 	if (err) {
// 		throw  err;
// 	}

// 	console.info('The solution is:', results[0].solution);	// 返回第一条记录的solution列的内容
// });
function handleError(err) {
  if (err) {
      // 如果是连接异常，自动重新连接
      console.log('err code:' + err.code);
      if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR' || err.code === 'ETIMEDOUT') {
          connect();
      } else {
          console.error(err.stack || err);
      }
  }
}

// var conn = mysql.createConnection(models);

function connect() {
  conn = mysql.createConnection(models);
  conn.connect(handleError);
  conn.on('error', handleError);
}
var conn;
connect();

// conn.connect(function (err) {
//   if (err) {
//     console.log('数据库链接失败3',err);
//     throw err;
//   }else{
//     console.log('数据库链接成功');
//   }
// });


// var connection = mysql.createConnection(databaseConfig);
//     connection.connect(
//       function (err) {
//       if (err) {
//         logger.info('数据库链接失败');
//         throw err;
//       }
//     }


var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
}

var dateStr = function(str) {
    return new Date(str.slice(0,7));
}

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    console.log(params.name);
    conn.query(sql, [params.name, params.account, params.pass, params.checkPass,
                    params.email, params.phone, params.card, dateStr(params.birth), params.sex], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//查找用户接口
router.post('/login', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
    if (params.name) {
        sql_name += "where username ='"+ params.name +"'";
    }
    var keywords = JSON.parse(Object.keys(params)[0]);
    conn.query(sql_name, params.name, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1')   //查询不出username，data 返回-1
        } else {
            var resultArray = result[0];
            console.log(resultArray.password);
           // console.log(keywords);
            if(resultArray.password === keywords.password) {
                jsonWrite(res, result);
            } else {
                res.send('0')   //username
            }
        }
    })
});

//获取用户信息
router.get('/getUser', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    console.log('请求参数',req.query)
    var params = req.query;
    console.log(params);
    if (params.name) {
        // sql_name += " where username ='"+ params.name +"'";
        sql_name = `${sql_name} where username = '${params.name}'`
    }
    conn.query(sql_name, params.name, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1')   //查询不出username，data 返回-1
        } else {
            jsonWrite(res, result);
        }
    })
});

//更新用户信息
router.post('/updateUser', (req, res) => {
    var sql_update = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_update  += " email = '" + params.email +
                        "',phone = '" + params.phone +
                        "',card = '" + params.card +
                        "',birth = '" + params.birth +
                        "',sex = '" + params.sex +
                        "' where id ='"+ params.id + "'";
    }    
    conn.query(sql_update, params.id, function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
        if (result.affectedRows === undefined) {
            res.send('更新失败，请联系管理员')   //查询不出username，data 返回-1
        } else {
            res.send('ok'); 
        }
    })
});

//更改密码
router.post('/modifyPassword', (req, res) => {
    var sql_modify = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_modify +=  " password = '" + params.pass +
                        "',repeatPass = '" + params.checkPass +
                        "' where id ='"+ params.id + "'";
    }
    conn.query(sql_modify, params.id, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result.affectedRows === undefined) {
            res.send('修改密码失败，请联系管理员')   //查询不出username，data 返回-1
        } else {
            res.send('ok'); 
        }
    })
});


module.exports = router;


