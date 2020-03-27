/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-03-19 13:21:01
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-27 13:38:29
 */
var mysql = require('mysql');
var logger = require('tracer').console();
var databaseConfig = require('./mysql.config');

// module.exports = {
//   query: function (sql, params, callback) {
//     //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
//     var connection = mysql.createConnection(databaseConfig);
//     connection.connect(function (err) {
//       if (err) {
//         logger.info('数据库链接失败');
//         throw err;
//       }
//       //开始数据操作
//       //传入三个参数，第一个参数sql语句，第二个参数sql语句中需要的数据，第三个参数回调函数
//       connection.query(sql, params, function (err, results, fields) {
//         if (err) {
//           logger.info('数据操作失败');
//           throw err;
//         }
//         //将查询出来的数据返回给回调函数
//         callback && callback(results, fields);
//         //results作为数据操作后的结果，fields作为数据库连接的一些字段
//         //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
//         connection.end(function (err) {
//           if (err) {
//             logger.info('关闭数据库连接失败！');
//             throw err;
//           }
//         });
//       });
//     });
//   }
// };

var connection = mysql.createConnection({
	host: 'localhost',	// 连接的服务器
	user: 'root',	// 用户名
	password: '123456',	// 用户密码
	database: 'test2'	// 选择的库
});

connection.connect(function (err) {
  if (err) {
    logger.info('[query] - :' + err);
      return;
  }
  logger.info('[connection connect]  succeed!');
});	// 创建一个mysql的线程

connection.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
	if (err) {
		throw  err;
	}

	logger.info('The solution is:', results[0].solution);	// 返回第一条记录的solution列的内容
});

// // // 增

// var userAddSql = 'INSERT INTO dictionary(Number,Text) VALUES(?,?)';
// var userAddSql_Params = ['0003', '一'];
// //增
// connection.query(userAddSql, userAddSql_Params, function (err, result) {
//     if (err) {
//         logger.info('[INSERT ERROR] - ', err.message);
//         return;
//     }

//     logger.info('--------------------------INSERT----------------------------');
//     //logger.info('INSERT ID:',result.insertId);
//     logger.info('INSERT ID:', result);
//     logger.info('-----------------------------------------------------------------\n\n');
// });


// // var userModSql = 'UPDATE dictionary SET Text = ? WHERE Number = ?';
// // var userModSql_Params = ['二', '0001'];
// // //改
// // connection.query(userModSql, userModSql_Params, function (err, result) {
// //     if (err) {
// //         logger.info('[UPDATE ERROR] - ', err.message);
// //         return;
// //     }
// //     logger.info('--------------------------UPDATE----------------------------');
// //     logger.info('UPDATE affectedRows', result.affectedRows);
// //     logger.info('-----------------------------------------------------------------\n\n');
// // });

// var userGetSql = 'SELECT * FROM dictionary';
// //查
// connection.query(userGetSql, function (err, result) {
//     if (err) {
//         logger.info('[SELECT ERROR] - ', err.message);
//         return;
//     }

//     logger.info('--------------------------SELECT----------------------------');
//     logger.info(result);
//     logger.info('-----------------------------------------------------------------\n\n');
// });

// // var userDelSql = 'DELETE FROM dictionary';
// // //删
// // connection.query(userDelSql, function (err, result) {
// //     if (err) {
// //         logger.info('[DELETE ERROR] - ', err.message);
// //         return;
// //     }

// //     logger.info('--------------------------DELETE----------------------------');
// //     logger.info('DELETE affectedRows', result.affectedRows);
// //     logger.info('-----------------------------------------------------------------\n\n');
// // });

// //关闭connection
// connection.end(function (err) {
//     if (err) {
//         return;
//     }
//     logger.info('[connection end] succeed!');
// });
