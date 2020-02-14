var express = require('express');
var router = express.Router();
var rosaryController = require("../controllers/rosaryController");
var indexController = require("../controllers/indexController");

/*
router.get('/',function(request,response,next){
    response.render('index',{title:'Express',alertStyle:"Success"});
});
*/

/*
router.get('/joyful',rosaryController.displayJoyfulList);
router.get('/sorrowful',rosaryController.displaySorrofulList);
router.get('/glorious',rosaryController.displayGloriousList);
router.get('/luminous',rosaryController.displayLuminousList);
*/

router.post('/login',indexController.processLoginPage);
router.post('/register',indexController.processRegisterPage);
router.get('/logout',indexController.performLogout);



module.exports = router;