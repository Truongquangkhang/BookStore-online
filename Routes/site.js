const express = require('express');
const BookController = require('../Controllers/BookController')
const Validations = require('../Middlerware/Validations.book')
const router = express.Router()

router.get('/',BookController.getBook)
router.get('/book', BookController.getBook)
router.post('/book',Validations.ValidationsCreate, BookController.addBook)
router.put('/book', BookController.updateBook)
router.delete('/book',Validations.ValidationDelete, BookController.deleteBook)


module.exports = router