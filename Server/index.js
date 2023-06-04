const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
var cookieParser = require('cookie-parser')
const auth = require('./Routes/auth')
// const site = require('./Routes/site')
const con = require('./Models/MongoDB/db')
con.connect()
const author = require('./Routes/author')
const book = require('./Routes/book')
const authMiddleware = require('./Middleware/authMiddleware')
require('dotenv').config()

const app = express()
const port = 3000

app.use(cookieParser(process.env.SECRETKEY))
// app.use(morgan('common'))
app.use(express.json())
app.use(cors())
// app.use('/',(req,res)=>{
//   res.send("HOME")
// })
app.use('/book', book)
app.use('/author', author)
// app.use('/book',authMiddleware ,site)
app.use('/auth', auth)


// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`)
// })

const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./GraphQL/Schema')
const resolvers = require('./GraphQL/Resolver')

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server started on port 4000`);
  });
}

startServer();