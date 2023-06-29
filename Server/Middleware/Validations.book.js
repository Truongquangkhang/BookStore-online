module.exports.ValidationFilter = (req,res,next) =>{
    if(req.query.categories){
        const categories = req.query.categories.split(',')
        req.body.categories = categories
    }
    else{
        req.body.categories = "ALL"
    }

    if(req.query.authors){
        const authors = req.query.authors.split(',')
        req.body.authors = authors
    }
    else{
        req.body.authors = "ALL"
    }

    next();

}
module.exports.ValidationsCreate = (req, res, next) => {
    if (!req.body.id) {
        res.status(400).json("Required id")
    }
    else if (!req.body.name) {
        res.status(400).json("Required name")
    }
    else if (!req.body.author) {
        res.status(400).json("Required author")
    }
    else {
        next()
    }
}
module.exports.ValidationDelete = (req, res, next) => {
    if (!req.query.id) {
        res.status(400).send("Required id")
    }
    else {
        var intRegex = /^\d+$/;
        if (intRegex.test(req.query.id)) {
            //num1 is a valid integer
            next()
        }
        else {
            res.status(400).send("ID not a number")
        }
    }
}

