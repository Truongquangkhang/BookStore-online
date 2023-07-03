const User= require('../Models/MongoDB/User')

module.exports.getUser = async (req, res)=>{
    try {
        //console.log(req.params.id);
        let user = await User.findById(req.body.idUser)
        console.log(user);
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(400).json({err: "User Not Found"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({err: error})
    }
}