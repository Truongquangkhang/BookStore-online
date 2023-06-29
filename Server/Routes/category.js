const express = require('express')
const Router = express.Router()
const CategoryController = require('../Controllers/CategoryController')

Router.get('/', CategoryController.getAll)
Router.post('/', CategoryController.addCategory)
Router.get('/:id', CategoryController.detailCategory)
module.exports = Router