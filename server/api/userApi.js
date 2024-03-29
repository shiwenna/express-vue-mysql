/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-03-26 16:20:53
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-30 17:06:42
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
    console.log(sql);
    console.log(params);
    conn.query(sql, [params.name, params.account, params.password, params.repeatPass,
                    params.email, params.phone, params.card, dateStr(params.birth), params.sex], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
})

.post('/login', (req, res) => { //查找用户接口
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
    if (params.name) {
        sql_name += " where username ='" + params.name + "'";
    }
    
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
            if(resultArray.password === params.password) {
                jsonWrite(res, result);
            } else {
                res.send('0')   //username
            }
        }
    })
})

.get('/getUser', (req, res) => { //获取用户信息
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
})
.post('/updateUser', (req, res) => { //更新用户信息
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
})
.post('/modifyPassword', (req, res) => { //更改密码
    var sql_modify = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_modify +=  " password = '" + params.password +
                        "',repeatPass = '" + params.repeatPass +
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


