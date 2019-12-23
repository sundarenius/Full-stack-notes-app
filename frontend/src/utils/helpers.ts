import { NotesContext, CategoriesContext } from '@/utils/interfaces'
import { dynamicSort } from '../../random_modules/index.js'
import router from '../router/router'

export const setUpCssVars = (theme: undefined | string = 'default', height: any): any => {
  const themeObj: any = {}
  switch (theme) {
    case 'default':
      themeObj['--sidebar-width'] = '180px'
      themeObj['--editor-height'] = height || '80vh'
      break
    default:
      break
  }
  const headEl = document.querySelector('head')
  const styleEl = document.createElement('style')
  styleEl.id = 'css-theme-vars'
  let themeObjAsString: string = ''
  for (const prop in themeObj) {
    if (prop) {
      themeObjAsString = `${themeObjAsString}${prop}:${themeObj[prop]};`
    }
  }
  styleEl.innerHTML = `
   :root {
     ${themeObjAsString}
   }
  `
  return headEl && headEl.appendChild(styleEl)
}

export const authNavigate = (path: string) => {
  console.log('authnavigate')
  console.log(router.push(path))
}

export const getCleanCategories = (NewNotes: any) => {
  const categories: any[] = [
    {  category: 'All', id: 'x1', total: 0, icon: 'mdi-view-dashboard' },
    {  category: 'Randoms', id: 'x2', total: 0, icon: 'mdi-tag-outline' }
  ]
  NewNotes.forEach((note: NotesContext) => {
    categories.push({
      ...note,
      icon: 'mdi-tag-outline'
    })
  })
  const holdCategories: CategoriesContext[] = []
  const filteredCategories: CategoriesContext[] = categories.filter((val) => {
    val.total = categories.filter((c: any) => c.category === val.category).length
    if (val.category === 'All') {
      val.total = categories.length - 2
    }
    if (val.category === 'Randoms') {
      val.total = val.total - 1
    }
    if (!holdCategories.includes(val.category)) {
      holdCategories.push(val.category)
      return val
    }
  })
  const allAndRandom = [ ...filteredCategories.slice(0, 2) ]
  const sortTheRest = [ ...filteredCategories.slice(2) ].sort(dynamicSort('category'))
  return [ ...allAndRandom, ...sortTheRest ]
}
