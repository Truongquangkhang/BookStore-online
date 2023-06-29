const express = require('express')
const Router = express.Router()
const AuthorController = require('../Controllers/AuthorController')

Router.get('/', AuthorController.getAll)
Router.post('/', AuthorController.createAuthor)
Router.get('/authors',AuthorController.getAuthorAndAmount)
Router.get('/:id',AuthorController.AuthorDetail)


module.exports = Router