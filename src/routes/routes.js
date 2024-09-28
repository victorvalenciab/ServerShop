const express = require('express');
const router = express.Router();
const indexControllerndex = require('../controllers/indexController');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController')
// const registerController = require('../controllers/registerController');

router.get('/', indexControllerndex.getIndexPage);
router.get('/login', loginController.getLoginPage);
router.get('/register', registerController.getRegisterPage);

module.exports = router;
