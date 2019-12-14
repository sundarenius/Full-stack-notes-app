import { ActionContext, NotesContext, CategoriesContext, ModifyNotesContext } from '@/utils/interfaces'
import { getCleanCategories } from '@/utils/helpers'
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
  }
}

const actions = {
  setInitialData: async ({ commit, state }: ActionContext) => {
    // API GET AWAIT (Use mocknotes during the time)
    const notesRes = MockNotes
    commit('setAllNotes', notesRes)
    commit('setCategories', getCleanCategories(notesRes))
  },
  updateAllData: async ({ commit, state }: ActionContext) => {
    // API SEND AWAIT
    commit('setAllNotes', state.allNotes)
    commit('setCategories', getCleanCategories(state.allNotes))
  },
  updateNotes ({ commit, state, dispatch }: ActionContext) {
    const newNotes = state.allNotes.filter((note: any) => note.id !== state.currentNote.id)
    newNotes.push(state.currentNote)
    commit('setAllNotes', newNotes)
    dispatch('updateAllData')
  },
  setCurrentNote ({ state, commit, dispatch }: ActionContext, modifiedProp: any) {
    const currentNote = {
      ...state.currentNote,
      ...modifiedProp
    }
    if (currentNote.id === 0) {
      currentNote.id = uuid()
    }
    currentNote.modified = new Date().getTime()
    commit('setCurrentNote', currentNote)
    dispatch('updateNotes')
  }
}

export default {
  mutations,
  actions
}
