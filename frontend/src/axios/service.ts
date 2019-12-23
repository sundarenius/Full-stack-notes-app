import { API, USER } from './setup'
import { NotesContext } from '@/utils/interfaces'

export const getAllNotes = async () => {
  const res = await API.get('/')
  return res.data
}

export const updateNote = (note: NotesContext) => {
  API.patch(`/${note._id}`, {
    title: note.title,
    text: note.text,
    category: note.category,
    modified: note.modified,
    color: note.color
  })
  .catch(res => {
    newNote(note)
  })
}

const newNote = (note: NotesContext) => {
  API.post('/', {
    title: note.title,
    text: note.text,
    category: note.category,
    modified: note.modified,
    color: note.color
  })
  .catch(res => console.log('hej'))
}

export const registerUser = (user: any) => {
  return USER.post('/register', {
    name: user.name,
    emailAddress: user.emailAddress,
    userName: user.userName,
    password: user.password
  })
  .then(res => ({ status: 'success', res: res }))
  .catch(err => ({ status: 'failed', err: err }))
}

export const loginUser = (user: any) => {
  return USER.post('/login', {
    email: user.email,
    password: user.password
  })
  .then(res => ({ status: 'success', res: res }))
  .catch(err => ({ status: 'failed', err: err }))
}
