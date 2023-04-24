const authModels = require('../Models/authModel')
const bcrypt = require("bcrypt")
const saltRounds = 10
var temp;
module.exports.Login = (req, res) => {

    authModels.Login(req.body, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(400).send("ERROR")
        }
        else {
            if (Object.keys(rows).length != 0) res.send(rows[0])
            else res.send(error = { msg: "email or password is not available" })
        }
    })
}
module.exports.Register = (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
    }

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(data.password, salt, function (err, hash) {
            data.password=hash
            authModels.Register(data, (err, rows) => {
                if (err) {
                    console.log(err)
                    res.status(400).send("ERROR")
                }
                else {
                    res.send(rows)
                }
        
            })
        });
    });
    

}