const { query } = require('express');
const dbconfig = require('./Configs/dbConfig')
const db = require('mysql')
const con = db.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
})

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!")
});

var ql = 'SELECT * FROM book WHERE id = ?'
var id = [1]
const get = (sql,[...arr]) =>{
    con.query(sql,[...arr], function (err, rows) {
        if (err) throw err;
        let result = (JSON.parse(JSON.stringify(rows)));
        console.log(result);
    })
}

get(ql,id)