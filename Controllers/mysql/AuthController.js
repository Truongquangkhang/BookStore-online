const authModels = require('../Models/authModel')
const bcrypt = require("bcrypt");
const { error } = require('firebase-functions/logger');
var jwt = require('jsonwebtoken');
const saltRounds = 10
var temp;

const token = (data, secret) => {

    return jwt.sign(data, secret, { expiresIn: '1h' })
}

module.exports.Login = (req, res) => {

    // CALLBACK
    // authModels.Login(req.body, (err, rows) => {
    //     if (err) {
    //         console.log(err)
    //         res.status(400).send("ERROR")
    //     }
    //     else {
    //         if (Object.keys(rows).length != 0) {
    //             var password = JSON.parse(JSON.stringify(rows))[0].password
    //             console.log(password)
    //             bcrypt.compare(req.body.password, password, function (err, result) {
    //                 if (result) {
    //                     var tk = (token(JSON.parse(JSON.stringify(rows))[0],process.env.SECRETKEY))
    //                     res.cookie('token' ,tk,{signed:true})
    //                     res.send("HOME")

    //                 }
    //                 else {
    //                     res.send(error = { msg: "password wrong" })
    //                 }
    //             });
    //         }
    //         else res.send(error = { msg: "email is not available" })
    //     }
    // })


    var promise = new Promise((resolve, reject) => {
        authModels.Login(req.body, (err, rows) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(JSON.parse(JSON.stringify(rows)))
            }
        })
    })
        .then((result) => {
            return new Promise((resolve, reject) => {
                bcrypt.compare(req.body.password, result[0].password, (err, rs) => {
                    if (rs) {
                        resolve(result[0])
                    }
                    else {
                        reject({ "error": "wrong password" })
                    }
                })
            })
        })
        .then((result) => {
            var tk = token(result, process.env.SECRETKEY)
            res.cookie('token', tk, { signed: true })
            res.send('LOGIN')
        })
        .catch((err) => { res.status(400).json(err) })

}
module.exports.Register = (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
    }

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(data.password, salt, function (err, hash) {
            data.password = hash
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
module.exports.Logout = (req, res) => {
    // req.clearCookie("token")
    res.send(req.cookies)
}