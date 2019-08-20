var mysql = require('mysql');

exports.connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'collegeusers',
    insecureAuth: false
});