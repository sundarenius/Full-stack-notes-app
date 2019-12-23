export interface NotesContext {
  id?: number | string,
  _id: number | string,
  title: string,
  text: string,
  category: string,
  color?: string,
  modified: number
}

export interface ActionContext {
  commit?: any,
  dispatch?: any,
  state?: any
}

export interface CategoriesContext {
  category: string,
  icon: string,
  id: number | string,
  total?: number
}

export interface ModifyNotesContext {
  id: number | string,
  title: string,
  text: string,
  category: string,
  color?: string,
  modified: number
}

export interface SetCategoryColorContext {
  category: string,
  color: string
}
