const Book = require('../Models/MongoDB/Book')
const Author = require('../Models/MongoDB/Author')
const Category = require('../Models/MongoDB/Category')


const resolvers = {
    Query:{
        books: async ()=> await Book.find(),
        book: async (parent,arg) => await Book.findById(arg._id),
        authors: async ()=> await Author.find()
    },
    Mutation:{
        createBook: async (parent,args)=>{
            const {name, categories, authors} = args

            let book = new Book({
                _name: name,
                category: categories,
                author: authors
            }) 

            await book.save()
            .then(rs=>{
                return rs
            })
            .catch(error=> console.log(error))

            return book
        }
    },

    Book: {
        authors: async (parent,arg) => {
            let ids = []
            parent.author.forEach(element => {
                ids.push(element)
            });
            return await Author.find({_id:ids})
        },
        categories: async (parent,arg) => {
            let ids = []
            parent.category.forEach(element => {
                ids.push(element)
            });
            return await Category.find({_id:ids})
        }
    }
}
module.exports = resolvers