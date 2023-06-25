const express = require('express')
const bookController = require('../Controllers/BookController')
const CategoryController = require('../Controllers/CategoryController')
const authMiddleware = require('../Middleware/authMiddleware')
const uploadFileMiddlerware = require('../Middleware/uploadFileMiddlerware')
const multer = require('multer')

const Router = express.Router()
const upload = multer({
    storage: multer.memoryStorage(),
})

Router.get('/', bookController.getALL)
Router.get('/:id',bookController.detailBook)
Router.post('/',authMiddleware.authLogin,upload.array("images"), uploadFileMiddlerware.ValidationCreateBook, bookController.addBook)
Router.put('/:id',authMiddleware.authLogin,upload.array("images"),uploadFileMiddlerware.ValidationCreateBook, bookController.updateBook)
Router.delete('/:id',authMiddleware.authLogin ,bookController.deleteBook)

module.exports = Router