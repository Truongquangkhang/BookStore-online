const Author = require('../Models/MongoDB/Author')

module.exports.AuthorDetail = async (req, res) => {
    await Author.findById(req.params.id)
        .then(rs => { res.status(200).json(rs) })
        .catch(error => res.status(400).json(error))
}