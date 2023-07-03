const jwt = require('jsonwebtoken')
module.exports.validatUser = (req, res, next)=>{
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1]; // Lấy token từ phần sau "Bearer "
        jwt.verify(token, process.env.SECRETKEY, function (err, decoded) {
            if (!decoded) {
                res.status(403).json({ err: "Vui long dang nhap" })
            }
            else{
                if(decoded.user._id){
                    req.body.idUser = decoded.user._id
                    next()
                }
                else{
                    res.status(403).json({err: "Vui long dang nhap"})
                }
                
            }
        });
        
    }
    else{
        res.status(400).json({err:"Vui long dang nhap"})
    }
}