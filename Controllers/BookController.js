const bookModel = require('../Models/bookModel')

const HomeController =(req,res)=>{
    res.render('home')
}
const getBook = (req,res)=>{
    bookModel.getAllBook('book',(err,rows)=>{
        if(err){
            console.log(err);
        }
        res.send(rows)
    })
}
const addBook = async (req,res)=>{
    const data ={
        id: req.body.id,
        name: req.body.name,
        author: req.body.author
    }
    bookModel.createBook('book',data,(err,rows)=>{
        if(err){
            console.log(err);
        }
        res.send("");
    })
}
const updateBook = async(req,res)=>{
    const data ={
        id: req.body.id,
        name: req.body.name,
        author: req.body.author
    }
    bookModel.updateBook('book',data,(err,rows)=>{
        if(err){
            console.log(err);
        }
        res.send("")
    })
}
const deleteBook = async(req,res)=>{
    bookModel.deleteBook('book',req.query.id,(err,row)=>{
        if(err){
            console.log(err);
        }
        res.send("")
    })
}
module.exports = {
    HomeController,
    getBook,
    addBook,
    updateBook,
    deleteBook
}