import { ActionContext, NotesContext, CategoriesContext, SetCategoryColorContext } from '@/utils/interfaces'
import {
  getCleanCategories,
  setUpCssVars,
  authNavigate
} from '@/utils/helpers'
import MockNotes from '@/utils/Mocks'
import uuid from 'uuid/v4'
import { getAllNotes, updateNote, loginUser, registerUser } from '@/axios/service'

const mutations = {
  setAllNotes (state: any, notes: NotesContext[]): void {
    state.allNotes = notes
  },
  setCategories (state: any, categories: CategoriesContext[]): void {
    state.allCategories = categories
  },
  setActiveCategory (state: any, category: string) {
    state.currentCategory = category
  },
  setCurrentNote (state: any, note: object) {
    state.currentNote = note
  },
  showEditorContent (state: any, payload: boolean) {
    state.showEditorContent = payload
  },
  logOut (state: any) {
    state.isAuth = false
    authNavigate('/login')
  },
  logIn (state: any) {
    state.isAuth = true
    authNavigate('/')
  },
  setSidebar (state: any, payload: boolean) {
    state.sidebar = payload
  },
  bounceUpdate (state: any, payload: number) {
    state.bounceUpdate = payload
  }
}

const actions = {
  setSidebar ({ commit, state }: ActionContext) {
    const oppositeBoolean = !state.sidebar
    commit('setSidebar', oppositeBoolean)
  },
  logOut ({ commit }: ActionContext) {
    commit('logOut')
  },
  logIn: async ({ commit }: ActionContext, user: any) => {
    const res = await loginUser(user)
    console.log(res)
    if (res.status === 'success') {
      commit('logIn')
    }
  },
  registerUser: async ({ commit }: ActionContext, user: any) => {
    const res = await registerUser(user)
    console.log(res)
    if (res.status === 'success') {
      commit('logIn')
    }
  },
  setInitialData: async ({ commit }: ActionContext) => {
    // API GET AWAIT -- use MOCK notes intil that
    console.log('setInitialData action')
    const res = await getAllNotes()
    console.log(res)
    const notesRes = res || MockNotes
    commit('setAllNotes', notesRes)
    commit('setCategories', getCleanCategories(notesRes))
  },
  updateAllData: ({ commit, state }: ActionContext, newNotes: NotesContext) => {
    // API SEND AWAIT
    // Stack 3 - Last
    // Update specific note "state.currentNote" API
    if (state.bounceUpdate === 0) {
      setTimeout(() => {
        updateNote(state.currentNote)
        commit('bounceUpdate', 0)
      }, 5000)
    }
    commit('bounceUpdate', 1)
    console.log('updateAllData action')
    commit('setAllNotes', newNotes)
    commit('setCategories', getCleanCategories(newNotes))
  },
  mergeNotesWithCurrentNote ({ state, dispatch }: ActionContext) {
    // Stack 2 - Second
    const newNotes = state.allNotes.filter((note: any) => note.id !== state.currentNote.id)
    newNotes.push(state.currentNote)
    dispatch('updateAllData', newNotes)
  },
  updateCurrentNote ({ state, commit, dispatch }: ActionContext, modifiedProp: any) {
    // Move these stacks (functions) to web worker as a side process - Can be CPU Heavy to do this for every keyinput.
    // Stack 1 - Start
    const currentNote = {
      ...state.currentNote,
      ...modifiedProp
    }
    if (currentNote._id === 0) {
      currentNote._id = uuid()
    }
    if (!currentNote.color) {
      const findColor = state.allNotes.find((val: any) => val.category === currentNote.category)
      currentNote.color = (findColor && findColor.color) || 'primary lighten-1'
    }
    currentNote.modified = new Date().getTime()
    commit('setCurrentNote', currentNote)
    dispatch('mergeNotesWithCurrentNote')
  },
  setCategoryColors ({ state, dispatch }: ActionContext, payload: SetCategoryColorContext) {
    const updatedNotes = state.allNotes.map((note: any) => {
      if (note.category === payload.category) {
        note.color = payload.color
      }
      return note
    })
    dispatch('updateAllData', updatedNotes)
  },
  hideShowEditorContent ({ commit }: any, payload: boolean) {
    const height = payload ? '80vh' : '10vh'
    setUpCssVars(undefined, height)
    commit('showEditorContent', payload)
  }
}

export default {
  mutations,
  actions
}
