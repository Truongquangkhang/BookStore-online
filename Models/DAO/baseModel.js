const dbconfig = require('../../Configs/dbConfig.js')
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

const get = (sql) => {
    con.query(sql, function (err, rows) {
        if (err) throw err;
        let result = (JSON.parse(JSON.stringify(rows)));
        console.log(result);
        return result
    })
}
const add = (sql, [...param]) => {
    con.query(sql, param, function (err, rows) {
        if (err) throw err;
    })
}
const update = (sql, [...param]) => {
    con.query(sql, param, function (err, rows) {
        if (err) throw err;
        
    })
}
const deletes = (sql, [...param]) => {
    con.query(sql, param, function (err, rows) {
        if (err) throw err;
        
    })
}

module.exports = {
    get,
    add,
    update,
    deletes
}