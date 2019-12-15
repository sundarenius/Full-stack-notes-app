import { ActionContext, NotesContext, CategoriesContext, SetCategoryColorContext } from '@/utils/interfaces'
import { getCleanCategories, setUpCssVars } from '@/utils/helpers'
import MockNotes from '@/utils/Mocks'
import uuid from 'uuid/v4'

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
  }
}

const actions = {
  setInitialData: async ({ commit, state }: ActionContext) => {
    // API GET AWAIT -- use MOCK notes intil that
    console.log('setInitialData action')
    const notesRes = MockNotes
    commit('setAllNotes', notesRes)
    commit('setCategories', getCleanCategories(notesRes))
  },
  updateAllData: async ({ commit, state }: ActionContext, newNotes: NotesContext) => {
    // API SEND AWAIT
    console.log('updateAllData action')
    commit('setAllNotes', newNotes)
    commit('setCategories', getCleanCategories(state.allNotes))
  },
  updateNotes ({ commit, state, dispatch }: ActionContext) {
    const newNotes = state.allNotes.filter((note: any) => note.id !== state.currentNote.id)
    newNotes.push(state.currentNote)
    dispatch('updateAllData', newNotes)
  },
  updateCurrentNote ({ state, commit, dispatch }: ActionContext, modifiedProp: any) {
    const currentNote = {
      ...state.currentNote,
      ...modifiedProp
    }
    if (currentNote.id === 0) {
      currentNote.id = uuid()
    }
    if (!currentNote.color) {
      const findColor = state.allNotes.find((val: any) => val.category === currentNote.category)
      currentNote.color = (findColor && findColor.color) || 'primary lighten-1'
    }
    currentNote.modified = new Date().getTime()
    commit('setCurrentNote', currentNote)
    dispatch('updateNotes')
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
