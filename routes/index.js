var express = require('express');
var router = express.Router();

var mainController = require('../controllers/home');
var usersController = require('../controllers/users');

/* GET home page. */
router.get('/', usersController.login);

router.get('/home', mainController.home);

router.get('/index',mainController.index);

module.exports = router;
