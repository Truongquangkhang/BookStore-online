const Book = require('../Models/MongoDB/Book')
const Author = require('../Models/MongoDB/Author')
const Category = require('../Models/MongoDB/Category')

module.exports.getALL = async (req, res) => {
    try {
        let books = await Book.find()
        if(req.body.categories!=='ALL'){
           const categories = req.body.categories
           books = books.filter((e)=>categories.every((element) => e.category.toString().includes(element)))
        }
        if(req.body.authors!=='ALL'){
            const authors = req.body.authors
            books = books.filter((e)=>authors.every((element) => e.author.toString().includes(element)))
        }
        res.status(200).json(books)
    } catch (error) {
        res.status(400).json({err: error})
    }
}
module.exports.detailBook = async (req, res) => {
    try {
        var book = await Book.findById(req.params.id)
        let Authors = await Promise.all(book.author.map(async (i) => {
            var ctg = await Author.findById(i)
            return {
                id: i,
                name: ctg.name
            };
        }));
        let Categories = await Promise.all(book.category.map(async (i) => {
            var ctg = await Category.findById(i)
            return {
                id: i,
                name: ctg.name
            };
        }));

        var sach = {
            _id: book.id,
            name: book.name,
            prices: book.prices,
            booksubtitle: book.booksubtitle,
            images: book.images,
            author: Authors,
            category: Categories
        }

        if (book) res.status(200).json(sach)
        else res.status(200).json({ err: "not found" })
    } catch (error) {
        res.status(400).json({ err: error })
    }
}
module.exports.findBookByAuthor = async (req, res) => {
    Book.findById('646d94a456411696edce2b53').populate('author').exec().then(rs => res.send(rs))
}
module.exports.addBook = async (req, res) => {
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

module.exports.updateBook = async (req, res) => {
    await Book.updateOne(
        { _id: req.params.id },
        {
            name: req.body.name,
            booksubtitle: req.body.booksubtitle,
            prices: req.body.prices,
            images: req.body.images,
            category: req.body.category,
            author: req.body.author
        }
    ).then(rs => res.status(200).json(rs))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteBook = async (req, res) => {
    await Book.deleteOne({ _id: req.params.id })
        .then(rs => res.status(200).json(rs))
        .catch(err => res.status(400).json(err))
}
const firebase = require('../Firebase/firebase')
module.exports.test = async (req, res) => {
    const files = req.files.images
    for (let i = 0; i < files.length; i++) {
        const blob = firebase.bucket.upload(files[i])
    }

}


