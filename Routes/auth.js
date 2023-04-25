const express = require('express');

const AuthController = require('../Controllers/AuthController')
const router = express.Router()

router.post('/login',AuthController.Login)
router.post('/register',AuthController.Register)
router.get('/logout',AuthController.Logout)

module.exports = router