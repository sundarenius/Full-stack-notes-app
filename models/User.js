const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  emailAddress:{
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('user', UserSchema)
