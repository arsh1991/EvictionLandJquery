var express = require('express');
var router = express.Router();
var createCtrl = require('../controllers/create');

router.get('/', createCtrl.home);

/* GET rankings page with filtered data. */
// router.get('/state', dashboardController.fetchDataByState);
router.post('/new', createCtrl.createNew);

module.exports = router;