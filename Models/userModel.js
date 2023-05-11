const con = require('./db')
const table = 'users'
module.exports.getAll = async () => {
    var query = `select * from ${table}`
    return new Promise((resolve, reject) => {
        con.query(query, (err, rows) => {
            if (err) {
                reject(err)
            }
            else resolve(rows)
        })
    })
}
