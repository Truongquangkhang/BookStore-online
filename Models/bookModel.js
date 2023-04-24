const con = require('./db')

const getAllBook = (table,callback)=> {
    var sql = `select * from ${table} `;
    con.query(sql,callback);
}

const createBook = (table,param,callback)=>{
    var sql = `insert into ${table} set ?`
    console.log(param)
    con.query(sql,param,callback);
}

const updateBook = (table,param,callback)=>{
    var sql = `update ${table} set ? where id= ?`
    con.query(sql,[param,param.id],callback);
}
const deleteBook = (table,id,callback)=>{
    var sql = `delete from ${table} where id = ${id}`;
    con.query(sql,callback);
}
module.exports = {
    getAllBook,
    createBook,
    updateBook,
    deleteBook
}