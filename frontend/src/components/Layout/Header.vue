<template>
  <v-app-bar
      app
      clipped-left
      elevate-on-scroll
      class="header-style"
    >
      <v-autocomplete
        :items="searchInputResult"
        solo-inverted
        flat
        hide-details
        @change="searchInputChange"
        label="Search"
        :rounded="$smallScreen"
        prepend-inner-icon="mdi-magnify"
        v-model="searchInput"
      />

      <v-spacer />
      <v-btn v-if="!$smallScreen" @click="setNewNote" :rounded="$smallScreen" class="success lighten-2 secondary--text px-5">
        <span v-if="!$smallScreen">New note</span>
        <v-icon :small="!$smallScreen" :class="{ 'ml-1' : !$smallScreen }">mdi-plus</v-icon>
      </v-btn>
      <v-btn @click="logOut" v-if="!$smallScreen" outlined class="ml-3 secondary--text" icon>
        <v-icon class="white--text">mdi-logout</v-icon>
      </v-btn>
      <v-btn v-if="0" rounded @click="test" class="ml-3 success lighten-2 secondary--text">
        TEST
      </v-btn>
      <v-btn @click="setSidebarMethod" v-if="$smallScreen" icon class="ml-1">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Mutation, Action } from 'vuex-class'
import { mapState } from 'vuex'
import { NotesContext, CategoriesContext } from '@/utils/interfaces'

@Component({
  name: 'Header',
  computed: {
    ...mapState({
      allCategories: ({ context }: any) => context.allCategories,
      allNotes: ({ context }: any) => context.allNotes
    })
  }
})

export default class Header extends Vue {
  @Mutation('setCurrentNote') setCurrentNote: any
  @Mutation('showEditorContent') showEditorContent: any
  @Action('setSidebar') setSidebar: any
  @Action('hideShowEditorContent') hideShowEditorContent: any
  @Action('logOut') logOut: any

  allNotes!: NotesContext[]
  allCategories!: CategoriesContext[]
  searchInput: string = ''
  primaryDrawer: object = {
    model: null,
    clipped: false,
  }

  @Watch('searchInput')
  onSearchInput (input: string) {
    console.log(input)
  }

  setSidebarMethod () {
    this.setSidebar()
  }

  setNote (note: NotesContext) {
    this.setCurrentNote(note)
    this.hideShowEditorContent(true)
  }
  searchInputChange (notes: string) {
    const splitTitleNText = notes.split(' - ')
    const matchNote = this.allNotes.filter((note: any) => {
      const removeEnd: any = splitTitleNText[1].split('...')
      removeEnd.pop()
      return note.title === splitTitleNText[0] && note.text.includes(removeEnd.join(' '))
    })[0]
    this.setNote(matchNote)
    this.searchInput = ''
  }
  test () {
    console.log('test')
    console.log(this.allNotes)
  }
  setNewNote () {
    const note = {
      id: 0,
      title: 'New note',
      text: '',
      category: 'Randoms',
      color: '',
      modified: 0
    }
    this.setNote(note)
  }

  get searchInputResult (): string[] {
    const textArr = this.allNotes.map((note: any) => `${note.title} - ${note.text.substr(0, 65)}...`)
    .filter((val: string) => val.includes(this.searchInput))
    return textArr
  }
}
</script>

<style lang="scss">
.header-style.v-app-bar--fixed.v-app-bar--is-scrolled {
  background-color: #303030 !important;
  z-index: 100;
}
</style>
