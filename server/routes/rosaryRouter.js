var express = require('express');
var router = express.Router();
var rosaryController = require("../controllers/rosaryController");


router.get('/joyful',rosaryController.displayJoyfulList);
router.get('/sorrowful',rosaryController.displaySorrofulList);
router.get('/glorious',rosaryController.displayGloriousList);
router.get('/luminous',rosaryController.displayLuminousList);



module.exports = router;