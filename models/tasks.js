var orm = require('../config/orm.js');

var task = {
    all: function(cb){
        orm.all('tasks', function(res){
            cb(res);
        })
    }
}

module.exports = task;