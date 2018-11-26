var connection = require('./connection.js');

var orm = {
    all: function(tableinput, cb){
        connection.query('SELECT * FROM '+tableinput+';', function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;