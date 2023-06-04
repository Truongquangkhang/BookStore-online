const express = require('express')
const Router = express.Router()
const AuthorController = require('../Controllers/AuthorController')

Router.get('/:id',AuthorController.AuthorDetail)

module.exports = Router