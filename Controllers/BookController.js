const bookDAO = require('../Models/DAO/bookDAO')

const HomeController =(req,res)=>{
    res.render('home')
}
const getBook = (req,res)=>{
    res.send(bookDAO.getAllBook())
}
const addBook = async (req,res)=>{
    const id = req.query.id;
    const name = req.query.name;
    const author = req.query.author;

    console.log(req.query)
    res.status(200).send(bookDAO.createBook([id,name,author]))
}
const updateBook = async(req,res)=>{
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
}
module.exports = {
    HomeController,
    getBook,
    addBook,
    updateBook,
}