const express = require('express')
const http = require('http')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const handlebars = require('express-handlebars');

const app = express()
const port = 3000

// default log
app.use(morgan('common'))

// // log to file
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logger/access.log'), { flags: 'a' })
// app.use(morgan('combined', { stream: accessLogStream }))


// express-handlebars
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/qk', (req, res) => {
  console.log(__dirname)
  res.send('Hello World!')
})
app.get('/', (req, res) => {
  console.log(path.join(__dirname, 'resources\\views'))
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})