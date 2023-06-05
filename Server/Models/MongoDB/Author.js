const mongoose = require('mongoose')
const Schema = mongoose.Schema
const authorSchemal = new mongoose.Schema({
    name: String,
    image: String
})

module.exports = new mongoose.model('Author',authorSchemal)