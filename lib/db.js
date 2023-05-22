var mysql = require("mysql2");
var db = mysql.createConnection({
  // 도커의 호스트 
  host: "172.19.0.2",
  user: "root",
  password: "1234",
  database: "test_db",

});
db.connect();

module.exports = db;
