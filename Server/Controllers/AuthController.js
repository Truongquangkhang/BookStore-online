const Account = require('../Models/MongoDB/Account')
const User = require('../Models/MongoDB/User')
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const saltRounds = 10

const token = (data, secret) => {
    return jwt.sign(data, secret, { expiresIn: '1h' })
}

module.exports.Register = async (req, res) => {
    Account.findOne({ username: req.body.username })
        .then(rs => {
            if (rs) {
                console.log("EEEERRRRORRRR");
                res.status(401).json("Email already exists")
            }
            else {
                bcrypt.genSalt(saltRounds, function (err, salt) {
                    bcrypt.hash(req.body.password, salt, function (err, hash) {
                        let account = new Account({
                            username: req.body.username,
                            password: hash
                        })

                        account.save()
                            .then(rs => {
                                let user = new User({
                                    name: req.body.name,
                                    account: rs._id
                                })

                                user.save()
                                res.status(200).json("success")
                            })
                            .catch(err => {
                                res.status(400).json(err)
                            })
                    })
                })
            }
        })
}

module.exports.Login = async (req, res) => {
    await Account.findOne({ username: req.body.username })
        .then(rs => {
            if ((rs)) {
                bcrypt.compare(req.body.password, rs.password, async (err, result) => {
                    if (result) {
                        let user = await User.findOne({ account: rs._id })
                        let tk = token({ user }, process.env.SECRETKEY)
                        res.status(200).json({ access_token: tk })
                    }
                    else {
                        res.status(200).json({ err: "password invalid" })
                    }
                })
            }
            else {
                res.status(200).json({ err: "username invalid" })
            }
        })
        .catch(err => res.status(400).json(err))

}

module.exports.logout = async (req, res) => {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1]; // Lấy token từ phần sau "Bearer "
        console.log(token); // In ra token
        res.send(token)
    }

}