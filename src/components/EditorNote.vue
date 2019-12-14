<template>
  <Fragment>
    <v-layout fill-height fluid class="editor-container">
      <v-card class="the-editor py-5 px-5 secondary lighten-3">
        <v-card-title class="editor-header">
          <v-layout>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="Title"
                  :value="title"
                  outlined
                  @change="setTitle"
                  color="lime"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-combobox
                  label="Category"
                  outlined
                  :items="getCategories"
                  color="lime"
                  v-model="choosedCategory"
                ></v-combobox>
              </v-col>
            </v-row>
          </v-layout>
          <v-layout v-show="choosedCategory.length" style="margin-top:-35px">
            <div class="body-1">
              Category color
            </div>
            <v-row class="ml-2 category-color-picker">
              <div :class="{ [x] : true }" :key="x" v-for="x in colors"></div>
            </v-row>
          </v-layout>
        </v-card-title>
        <v-textarea
          name="input-7-1"
          label="Notes"
          placeholder="Start writing..."
          hint="..."
          color="lime"
          style="height:500px"
          v-model="notesText"
        ></v-textarea>
      </v-card>
    </v-layout>
  </Fragment>
</template>

<script lang="ts">
import { Fragment } from 'vue-fragment'
import { Action, Mutation } from 'vuex-class'
import { mapState } from 'vuex'
import { Vue, Component, Watch } from 'vue-property-decorator'
import { CategoriesContext, NotesContext } from '@/utils/interfaces'

@Component({
  name: 'Editor-note',
  components: {
    Fragment
  },
  computed: {
    ...mapState({
      allNotes: ({ context }: any) => context.allNotes,
      allCategories: ({ context }: any) => context.allCategories,
      colors: ({ context }: any) => context.colors,
      currentNote: ({ context }: any) => context.currentNote,
    })
  }
})

export default class EditorNote extends Vue {
  @Action('modifyNotes') modifyNotes: any
  @Action('setCurrentNote') setCurrentNote: any

  allCategories!: CategoriesContext[]
  currentNote!: NotesContext
  allNotes!: object[]

  get choosedCategory () {
    return this.currentNote.category
  }
  set choosedCategory (val: string) {
    this.setCurrentNote({
      category: val
    })
  }

  get notesText () {
    return this.currentNote.text
  }
  set notesText (val: string) {
    this.setCurrentNote({
      text: val
    })
  }

  get title () {
    return this.currentNote.title
  }
  set title (val: string) {
    this.setCurrentNote({
      title: val
    })
  }

  get getCategories () {
    return this.allCategories.map((val) => val.category).splice(1)
  }

  setTitle (val: string) {
    this.title = val
  }
}
</script>

<style lang="scss" scoped>
.editor-container {
  width: 100%;
  height: 80vh;
  .the-editor {
    width: 100%!important;
  }
  .editor-header {
    padding: 0;
  }
}
.category-color-picker {
  margin-top: -4px;
  div {
    position: relative;
    z-index: 40;
    padding: 5px 15px;
    height: 20px;
    box-shadow: 1px 1px 3px lightgray;
    margin: 5px 5px;
    cursor: pointer;
    border-radius: 5px;
  }
}
.v-select-list {
  z-index: 400;
}
</style>