const express = require('express')
const morgan = require('morgan')

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
app.use(morgan('common'))
app.use(express.json())

// app.use('/',(req,res)=>{
//   res.send("HOME")
// })
app.use('/book',book)
app.use('/author',author)
// app.use('/book',authMiddleware ,site)
app.use('/auth',auth)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})