const Author = require('../Models/MongoDB/Author')

module.exports.getAll = async(req, res)=>{
    try {
        let authors = await Author.find()
        res.status(200).json(authors)
    } catch (error) {
        res.status(400).json({error: error})
    }
}
module.exports.createAuthor = async(req,res)=>{
    console.log(req.body);
    try {
        const author = new Author({
            name: req.body.name,
            image: req.body.image
        })
        await author.save()
        res.status(200).json("ADD")
    } catch (error) {
        res.status(400).json({err:error})
    }
}
module.exports.AuthorDetail = async (req, res) => {
    try {
        let author = await Author.findById(req.params.id)
        let books = await author.DetailAuthor()
        res.status(200).json(books)
    } catch (error) {
        res.status(400).json(error)
    }
}





module.exports.getAuthorAndAmount = async(req, res)=>{
    try {
        let authors = await Author.find()

        authors.forEach(async (element) =>  {
            console.log(await element.AuthorDetail());
        });

        res.status(200).json(authors)
    } catch (error) {
        res.status(400).json({err: error})
    }
}