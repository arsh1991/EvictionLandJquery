var express = require('express');
var router = express.Router();
var createCtrl = require('../controllers/create');

router.get('/', createCtrl.home);

router.post('/new', createCtrl.createNew);

module.exports = router;