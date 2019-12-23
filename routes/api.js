const express = require('express')
const router = express.Router()
const GetNotes = require('../models/getNotes')
const getNotesMiddleWare = require('../middlewares/getNotes')

// Getting all notes
router.get('/', async (req, res) => {
  try {
    const notes = await GetNotes.find()
    res.json(notes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Creating note subscriber
router.post('/', async (req, res) => {
  const notes = new GetNotes({
    title: req.body.title,
    text: req.body.text,
    category: req.body.category,
    modified: req.body.modified,
    color: req.body.color
  })

  try {
    const newNotes = await notes.save()
    res.status(201).json(newNotes)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Getting specific note
router.get('/:id', getNotesMiddleWare, (req, res) => {
  res.json(res.notes)
})

// Updating specific note
router.patch('/:id', getNotesMiddleWare, async (req, res) => {
  try {
    res.notes.title = req.body.title
    res.notes.text = req.body.text
    res.notes.category = req.body.category
    res.notes.modified = req.body.modified
    res.notes.color = req.body.color

    const updatedNote = await res.notes.save()
    res.json(updatedNote)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting notes
router.delete('/:id', getNotesMiddleWare, async (req, res) => {
  try {
    await res.notes.remove()
    res.json({ message: 'Deleted This Subscriber' })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
