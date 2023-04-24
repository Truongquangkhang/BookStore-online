const express = require('express');

const AuthController = require('../Controllers/AuthController')
const router = express.Router()

router.post('/login',AuthController.Login)
router.post('/register',AuthController.Register)

module.exports = router