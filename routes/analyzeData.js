var express = require('express');
var router = express.Router();
var analyzeData = require('../controllers/analyzeData');

/* GET rankings page. */
router.get('/', analyzeData.analyzedata);

module.exports = router;
