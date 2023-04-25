const express = require('express')
const morgan = require('morgan')

var cookieParser = require('cookie-parser')
const auth = require('./Routes/auth')
const site = require('./Routes/site')
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
app.use('/book', site)
app.use('/auth',auth)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})