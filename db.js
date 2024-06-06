const mysql = require('mysql2')

const pool = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: 'pragati',
   database: 'evernote',
   port: 3306,
   connectionLimit: 10,
   queueLimit: 0
})

module.exports = pool