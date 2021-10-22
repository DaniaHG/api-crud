const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:"x8autxobia7sgh74.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"s8c0t3q9bm6xlv0r",
    password:"iwv974poo5c6u8jh",
    database:"oexk6sn6x2lc0kha",
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('En linea...');
    }
  });

  module.exports = mysqlConnection;