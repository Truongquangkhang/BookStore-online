const mongoose = require('mongoose')
const Schema = mongoose.Schema
const authorSchemal = new mongoose.Schema({
    name: String,
    image: String
}, {
    methods: {
        async DetailAuthor() {
            try {
                //var books = await mongoose.model('book').find({ author: this._id }).select('_id name')
                let authors = {
                    name: this.name,
                    image: this.image,
                    books: await mongoose.model('book').find({ author: this._id }).select('_id name')
                }
                return authors
            } catch (error) {
                console.log(error);
            }
        }
    }
})

module.exports = new mongoose.model('Author', authorSchemal)