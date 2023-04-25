var jwt = require('jsonwebtoken');


module.exports.authLogin = (req, res, next) => {
    jwt.verify(req.signedCookies.token, process.env.SECRETKEY, function (err, decoded) {
        if (!decoded) {
            res.status(400).json({ err: err })
        }
        else next()
    });
}