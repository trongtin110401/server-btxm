// 'use strict';
// const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "root",
//   password: "12345",
//   database: "quanlybaotrixe",
// });
// module.exports = db
'use strict';
const {Client} = require('pg');

const client = new Client({
  host: "ec2-34-200-205-45.compute-1.amazonaws.com",
  port: "5432",
  user: "tbqqrjxpxjgbiw",
  password: "3fdb5472dd92553935153e186bb26226e436c38b703e2c6d8fe88368c115b98b",
  database: "da3es9bl93d23v",
});
module.exports = db