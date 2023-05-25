const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/nodejs');
}

const Book = new mongoose.Schema({
    _name: String,
    booksubtitle: String,
    category: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    },
}, {
    methods: {
        async findsimilarCategory() {
            try {
                var books = await mongoose.model('book').find({ category: this.category })
                console.log(books);
            } catch (error) {
                console.log(error);
            }
        }
    }
})
let Books = mongoose.model('book', Book);

const authorSchema = new mongoose.Schema({
    name: String,
});

const Author = mongoose.model('Author', authorSchema);

const auth = new Author({
    name: "Quang Khang"
})

// auth.save()
// .then(rs=>{
//     const book = new Books({
//         _name: "toan lop 1",
//         author: rs._id
//     })

//     return book.save();
// })
// .then(rs=>console.log(rs))
// .catch(err=>console.log(err))


async function t() {
    Books.findById('646d94a456411696edce2b53').populate('author').exec().then(rs=>console.log(rs.author))
   
}
Author.findById('646d94a356411696edce2b50').exec().then(rs=>console.log(rs))
//Books.updateOne({_name:'Dac Nhan Tam'},{category:"HEHEHE"}).then((rs)=>{console.log(rs);}).catch(err=>console.log(err))
//Books.updateMany({_name:'MongoDB for Beginners'},{category:"HEHEHE"}).then((rs)=>{console.log(rs);}).catch(err=>console.log(err))
//Books.deleteOne({_name: "Dac Nhan Tam"}).then(rs=>console.log(rs)).catch(err=>console.log(err))
// // Save the document to the database
// newBook.save();
// Books.find().then((result) => {
//     console.log(result);
// })
