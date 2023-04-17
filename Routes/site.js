const express = require('express');
const BookController = require('../Controllers/BookController')
const router = express.Router()

router.get('/',BookController.HomeController)
router.get('/book',BookController.getBook)
router.get('/book/create',BookController.addBook)
router.get('/book/update/:id',BookController.updateBook)


module.exports = router