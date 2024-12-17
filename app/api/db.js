const mysql = require('mysql2/promise');

// 创建 MySQL 连接池
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1', // 服务器地址
  user: 'root', // 用户名
  password: 'root', // 密码
  database: 'demo01', // 数据库名
});

// 导出连接池
module.exports = pool;