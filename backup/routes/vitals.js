module.exports = function(env){

    var express = require('express');
    var router = express.Router();
    router.get('/', function(req, res) {
        res.render('vitals', { runningconfig: env });
    });

    return router;
}