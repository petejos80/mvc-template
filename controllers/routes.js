var express = require('express');
var router = express.Router();
var tasks = require('../models/tasks.js');

// On load, render index
router.get('/', function(req, res){
    tasks.all(function(tasks_data){
        console.log(tasks_data);
        res.render('index');
    })
});

// Export the router [routes]
module.exports = router;