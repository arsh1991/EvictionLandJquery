var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin');

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/uploads')
    },
    filename: (req, file, cb) =>
    {
        cb(null, file.fieldname + '-' + Date.now()+".xlsx")
    }
    });
var upload = multer({storage: storage});


/* Get Login Page */
router.get('/', adminController.login);

router.post('/handleSignin', adminController.handleSignin);

router.get('/home', adminController.home);

router.post('/add', upload.single("csvfile"), adminController.handleAddDocument);
;

module.exports = router;
