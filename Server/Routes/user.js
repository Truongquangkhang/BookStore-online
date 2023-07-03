const express = require('express')
const Router = express.Router()
const userController = require('../Controllers/UserController')
const validationtUser = require('../Middleware/Validation.user')

Router.get('/getUser', validationtUser.validatUser,userController.getUser)

module.exports = Router
