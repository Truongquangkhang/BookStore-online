const express = require('express');
const BookController = require('../Controllers/BookController')
const Validations = require('../Middleware/Validations.book')
const router = express.Router()

router.get('/', BookController.getBook)
router.post('/',Validations.ValidationsCreate, BookController.addBook)
router.put('/:idbook', BookController.updateBook)
router.delete('/',Validations.ValidationDelete, BookController.deleteBook)


module.exports = router