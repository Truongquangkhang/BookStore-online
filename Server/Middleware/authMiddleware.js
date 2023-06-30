var jwt = require('jsonwebtoken');


module.exports.authLogin = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1]; // Lấy token từ phần sau "Bearer "
        jwt.verify(token, process.env.SECRETKEY, function (err, decoded) {
            if (!decoded) {
                res.status(403).json({ err: "Vui long dang nhap" })
            }
            else{
                if(decoded.user.role === 'admin'){
                    console.log(decoded.user.role);
                    next()
                }
                else{
                    res.status(403).json({err: "you do not have access"})
                }
                
            }
        });
        
    }
    else{
        res.status(400).json({err:"Vui long dang nhap"})
    }
    
}