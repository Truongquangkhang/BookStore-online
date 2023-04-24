const express = require('express')
const morgan = require('morgan')

var cookieParser = require('cookie-parser')
const auth = require('./Routes/auth')
const site = require('./Routes/site')

const app = express()
const port = 3000

app.use(cookieParser())
app.use(morgan('common'))
app.use(express.json())


app.use('/book', site)
app.use('/auth',auth)
app.use('/', site)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})