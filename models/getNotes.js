const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  modified: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('notes-app-collection', notesSchema)
