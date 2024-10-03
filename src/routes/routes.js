const express = require('express');
const router = express.Router();
const indexControllerndex = require('../controllers/indexController');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const shopController = require('../controllers/shopController');


router.get('/', indexControllerndex.getIndexPage);
router.get('/login', loginController.getLoginPage);
router.get('/register', registerController.getRegisterPage);
router.get('/shop-server', shopController.getShopPage);
router.post('/login', loginController.login);
router.post('/register', registerController.register);


module.exports = router;