const express = require('express')
const bookController = require('../Controllers/BookController')
const CategoryController = require('../Controllers/CategoryController')
const authMiddleware = require('../Middleware/authMiddleware')
const Router = express.Router()

Router.get('/',bookController.getALL)
Router.post('/',bookController.addBook)
Router.put('/:id',authMiddleware.authLogin,bookController.updateBook)
Router.delete('/:id',authMiddleware.authLogin,bookController.deleteBook)

module.exports = Router