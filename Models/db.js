const dbconfig = require('../Configs/dbConfig.js')
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

module.exports = con