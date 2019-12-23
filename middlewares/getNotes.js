// Middleware function for gettig notes object by ID
const GetNotes = require('../models/getNotes')

const getNotes = async (req, res, next) => {
  let notes
  try {
    notes = await GetNotes.findById(req.params.id)
    if (notes == null) {
      return res.status(404).json({ message: 'Cant find notes'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }
  
  res.notes = notes
  next()
}

module.exports = getNotes
