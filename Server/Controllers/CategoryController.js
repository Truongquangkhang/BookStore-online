const Category = require('../Models/MongoDB/Category')

module.exports.addCategory = async(req, res)=>{
    let cat = new Category({
        name: req.body.name,
        description: req.body.description
    })
    cat.save()
    .then(rs=>res.status(200).json(rs))
    .catch(err=>res.status(400).json(err))
}

module.exports.getAll = async(req,res)=>{
    try {
        const cat = await Category.find()
        res.status(200).json(cat)
    } catch (error) {
        res.status(400).json({err: error})
    }
}
module.exports.detailCategory = async(req,res)=>{
    try {
        let category = await Category.findById(req.params.id)
        let Detail = await category.DetailCategory()
        res.status(200).json(Detail)
    } catch (error) {
        res.status(400).json({err: error})
    }
}