const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Book = new mongoose.Schema({
    name: String,
    booksubtitle: String,
    prices: String,
    images:[String],
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }],
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    }],
    
}, {
    methods: {
        async findsimilarCategory() {
            try {
                var books = await mongoose.model('book').find({ category: this.category })
                console.log(books);
            } catch (error) {
                console.log(error);
            }
        }, 
    },
    versionKey: false
})
module.exports = mongoose.model('book', Book);


