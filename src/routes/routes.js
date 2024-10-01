const express = require('express');
const router = express.Router();
const indexControllerndex = require('../controllers/indexController');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');


router.get('/', indexControllerndex.getIndexPage);
router.get('/login', loginController.getLoginPage);
router.get('/register', registerController.getRegisterPage);
router.post('/login', loginController.login);
router.post('/register', registerController.register);

module.exports = router;
