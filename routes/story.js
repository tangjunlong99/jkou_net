var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('story', { title: '创业故事' });
});

module.exports = router;