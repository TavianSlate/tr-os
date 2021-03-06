var express = require('express');
var router = express.Router();

router.use('/favicon.ico', require('./favicon'));
router.use('/css',require('./css'));
router.use('/img', require('./img'));
router.use('/js', require ('./js'));

router.use('/', require('./views'));

module.exports = router;
