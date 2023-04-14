const express = require('express');
const HomeController = require('../Controllers/BookController')
const router = express.Router()

router.get('/',HomeController)

module.exports = router