var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tasks_db'
});

connection.connect(function(err){
    if(err)throw err;
    console.log('Connected as id: ', connection.threadId)
});

module.exports = connection;