var express = require('express');
var router = express.Router();

var userRouter = require('../controllers/userController');

router.get('/',userRouter.displayUserList);
router.post('/add',userRouter.addUserPost);
router.get('/delete/:id',userRouter.deleteUser);

module.exports = router;