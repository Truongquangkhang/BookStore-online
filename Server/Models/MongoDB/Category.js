const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    name: String,
    description: String
}, {
    methods: {
        async DetailCategory() {
            try {
                //var books = await mongoose.model('book').find({ author: this._id }).select('_id name')
                let authors = {
                    name: this.name,
                    image: this.image,
                    books: await mongoose.model('book').find({ category: this._id }).select('_id name')
                }
                return authors
            } catch (error) {
                console.log(error);
            }
        }
    }
    , versionKey: false
})

module.exports = mongoose.model('Category', CategorySchema)