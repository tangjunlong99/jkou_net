var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('meet', { title: '遇见地点' });
});

module.exports = router;