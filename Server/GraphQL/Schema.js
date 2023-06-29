const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Book{
        _id: ID,
        _name: String,
        authors: [Author],
        categories: [Category]
    }
    type Author{
        _id: ID,
        name: String,
    }
    type Category{
        _id: ID,
        name: String
    }
    type Query{
        books: [Book],
        book(_id:ID): Book,
        authors: [Author],
        author(_id:ID): Author,
        categories: [Category],
        category(_id:ID): Category, 
    }
    type Mutation {
        createBook (name: String, categories: [ID], authors: [ID]): Book,
    }
`;


module.exports = typeDefs