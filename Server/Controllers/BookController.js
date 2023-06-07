const Book = require('../Models/MongoDB/Book')
const Author = require('../Models/MongoDB/Author')
const Category = require('../Models/MongoDB/Category')

module.exports.getALL = async (req,res)=>{
    try {
        let books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports.findBookByAuthor = async(req,res)=>{
    Book.findById('646d94a456411696edce2b53').populate('author').exec().then(rs=>res.send(rs))
}
module.exports.addBook =  async (req,res)=>{
    console.log(req.body);
    let book = new Book({
        name: req.body.name,
        booksubtitle: req.body.booksubtitle,
        prices: req.body.prices,
        images: req.body.images,
        category: req.body.category,
        author: req.body.author
    })
    try {
        await book.save()
        res.status(200).json("ADD")
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.updateBook = async (req,res)=>{
    await Book.updateOne(
        {_id:req.params.id},
        {
            name: req.body.name,
            author: req.body.author,
            category: req.body.category
        }
    ).then(rs=>res.status(200).json(rs))
    .catch(err=>res.status(400).json(err))
}

module.exports.deleteBook = async (req,res)=>{
    await Book.deleteOne({_id:req.params.id})
    .then(rs=> res.status(200).json(rs))
    .catch(err=>res.status(400).json(err))
}
const firebase = require('../Firebase/firebase')
module.exports.test = async (req, res)=>{
    const files = req.files.images
    for(let i =0;i<files.length;i++){
        const blob = firebase.bucket.upload(files[i])
        
        

    }
    
}

