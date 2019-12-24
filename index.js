require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const jwt = require('jsonwebtoken')
const passport = require('passport')

// Middlewares
app.use(passport.initialize())
app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.set('port', port)

console.log(process.env.DATABASE_URL)
mongoose.set('useCreateIndex', true)
mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database!'))

app.use(express.json())

app.use('/api', require('./routes/api'))

app.use('/login', require('./routes/login'))

app.use(express.static(__dirname + '/frontend/dist'))

// handle every other route with index.html, which will contain
// a script the to application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'frontend/dist/index.html'));
})

app.listen(app.get('port'), () => console.log(`Server started on port: ${port}`))
