const mongoose = require('mongoose')
const Schema = mongoose.Schema
const authorSchemal = new mongoose.Schema({
    name: String,
},{ versionKey: false })

module.exports = new mongoose.model('Author',authorSchemal)