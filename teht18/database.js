const mysql = require('mysql2');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'martel',
  password: '1234',
  database: 'arviointitietokanta'
});
module.exports = connection;