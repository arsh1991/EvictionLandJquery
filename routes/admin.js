var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin');


/* Get Login Page */
router.get('/', adminController.login);

router.post('/handleSignin', adminController.handleSignin);

router.get('/home', adminController.home);

module.exports = router;
