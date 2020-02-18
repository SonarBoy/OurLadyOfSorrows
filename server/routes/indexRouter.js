var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController");


router.post('/login',indexController.processLoginPage);
router.post('/register',indexController.processRegisterPage);
router.get('/logout',indexController.performLogout);



module.exports = router;