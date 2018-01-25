var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('income', { title: '收入来源'});
});

module.exports = router;