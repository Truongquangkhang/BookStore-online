const Book = require('../Models/MongoDB/Book')
const Author = require('../Models/MongoDB/Author')
const Category = require('../Models/MongoDB/Category')
const firebase = require('../Firebase/firebase')
const { getStorage, ref, uploadBytes, getDownloadURL, getBytes } = require("firebase/storage");

module.exports.getALL = async (req, res) => {
    try {
        let books = await Book.find()
        if (req.body.categories !== 'ALL') {
            const categories = req.body.categories
            books = books.filter((e) => categories.every((element) => e.category.toString().includes(element)))
        }
        if (req.body.authors !== 'ALL') {
            const authors = req.body.authors
            books = books.filter((e) => authors.every((element) => e.author.toString().includes(element)))
        }
        res.status(200).json(books)
    } catch (error) {
        res.status(400).json({ err: error })
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

module.exports.test = async (req, res) => {
    const files = req.files.images
    for (let i = 0; i < files.length; i++) {
        const blob = firebase.bucket.upload(files[i])
    }

}
module.exports.viewBook = async (req, res) => {
    try {
        const storage = getStorage(firebase.app)
        const storageRef = ref(storage, 'abc.pdf')
        const file = await getBytes(storageRef)
        const buffer = Buffer.from(file);
        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-Disposition', 'attachment; filename=name.Pdf')
        res.setHeader('Content-Length', buffer.length)
        res.status(200).json(buffer)
    } catch (error) {
        res.status(500).json(error)
    }




    //   const filePath = 'C:\\Users\\win\\Downloads\\102200312_NguyenVanHoangNhan (1).pdf'; // Đường dẫn tới file PDF

    //   res.sendFile(filePath, (err) => {
    //     if (err) {
    //       console.error('Error sending file:', err);
    //       res.status(err.status).end();
    //     } else {
    //       console.log('File sent successfully');
    //     }
    //   });


    // const storage = getStorage();
    // getDownloadURL(ref(storage, 'abc.pdf'))
    //     .then((url) => {
    //         // `url` is the download URL for 'images/stars.jpg'

    //         // This can be downloaded directly:
    //         const xhr = new XMLHttpRequest();
    //         xhr.responseType = 'blob';
    //         xhr.onload = (event) => {
    //             const blob = xhr.response;
    //         };
    //         xhr.open('GET', url);
    //         xhr.send();

    //         // Or inserted into an <img> element
    //         const img = document.getElementById('myimg');
    //         img.setAttribute('src', url);

    //         console.log(img);
    //         res.send(img)

    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         res.send(error)
    //         // Handle any errors
    //     });
}


