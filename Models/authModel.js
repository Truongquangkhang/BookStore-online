const con = require('./db')
const bcrypt = require("bcrypt")
const table = "account"
// const getIDMax = (rs) => {
//     var query = `select MAX(id) as max_id from ${table}`
//     con.query(query, (err, rows) => {
//         var temp = rows.map((row)=>{return JSON.parse(JSON.stringify(row)).max_id})
//         rs.id=temp
//     })
// }
module.exports.Login = (account, callback) => {
    var query = `select * from ${table} where email = ?`
    con.query(query,[account.email],callback);
}
module.exports.Register = (data, callback) => {
    var query = `insert into ${table}(email,password,type) values(?,?,?)`
    con.query(query, [data.email, data.password, data.type], callback)

}