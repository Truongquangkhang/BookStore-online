const express = require('express')
const bookController = require('../Controllers/BookController')
const CategoryController = require('../Controllers/CategoryController')
const authMiddleware = require('../Middleware/authMiddleware')
const uploadFileMiddlerware = require('../Middleware/uploadFileMiddlerware')
const multer = require('multer')

const Router = express.Router()
const upload = multer({
    storage: multer.memoryStorage(),
})

Router.get('/', bookController.getALL)
Router.get('/:id',bookController.detailBook)
Router.post('/',upload.array("images"),uploadFileMiddlerware.ValidationCreateBook, bookController.addBook)
Router.put('/:id',upload.array("images"),uploadFileMiddlerware.ValidationCreateBook, bookController.updateBook)
Router.delete('/:id', bookController.deleteBook)











// Router.post('/test', upload.single('images'), (req, res) => {
//     if(!req.file) {
//         return res.status(400).send("Error: No files found")
//     } 

//     const blob = firebase.bucket.file(req.file.originalname)

//     const blobWriter = blob.createWriteStream({
//         metadata: {
//             contentType: req.file.mimetype
//         }
//     })

//     blobWriter.on('error', (err) => {
//         console.log(err)
//     })

//     blobWriter.on('finish', () => {
//         res.status(200).send("File uploaded.")
//     })

//     blobWriter.end(req.file.buffer)
// })


module.exports = Router