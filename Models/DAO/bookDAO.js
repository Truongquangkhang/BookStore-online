const baseModel = require('./baseModel')

const getAllBook = ()=> {
    return baseModel.get('select * from book');
}

const createBook = ([...param])=>{
    baseModel.add('insert into book(id,name,author) values (?,?,?)',[...param])
}
const updateBook = ([...param])=>{
    baseModel.update('update book set name = ? , author = ? where id = ?',[...param])
}

module.exports = {
    getAllBook,
    createBook
}