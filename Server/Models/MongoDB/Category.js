const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    name: String,
    description: String
},{versionKey:false})

module.exports = mongoose.model('Category',CategorySchema)