var mysql = require('mysql');

function createConnection() {
  var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Wjp212156',
    database: 'my_blog'
  });
  return connection;
}

module.exports.createConnection = createConnection;