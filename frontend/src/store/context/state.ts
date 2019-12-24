const state = {
  loginError: '',
  isAuth: false, // set to true when developing the site is done,
  currentCategory: 'All',
  sidebar: false,
  currentNote: {
    _id: 0,
    title: 'New note',
    text: '',
    category: 'Randoms',
    color: '',
    modified: 0
  },
  allNotes: [],
  allCategories: [],
  colors: [
    'red lighten-1',
    'purple lighten-2',
    'cyan lighten-1',
    'blue ligten-2',
    'indigo lighten-1',
    'teal lighten-1',
    'lime'
  ],
  showEditorContent: true,
  bounceUpdate: 0
}

export default state
