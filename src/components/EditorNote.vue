<template>
  <Fragment>
    <v-layout fill-height fluid class="editor-container">
      <v-card class="the-editor py-5 px-5 secondary lighten-3">
        <div v-show="!showEditorContent" class="hidden-content">
          <h3>{{ title }} - {{ choosedCategory }}</h3>
          <div @click="showContent" style="margin-top:-6px">
            <v-btn large icon>
              <v-icon large>mdi-chevron-down</v-icon>
            </v-btn>
          </div>
        </div>
        <div v-show="showEditorContent">
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
                <div @click="setCategoryColor(x)" :class="{ [x] : true }" :key="x" v-for="x in colors"></div>
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
        </div>
      </v-card>
    </v-layout>
  </Fragment>
</template>

<script lang="ts">
import { Fragment } from 'vue-fragment'
import { Action } from 'vuex-class'
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
      showEditorContent: ({ context }: any) => context.showEditorContent
    })
  }
})

export default class EditorNote extends Vue {
  @Action('modifyNotes') modifyNotes: any
  @Action('updateCurrentNote') updateCurrentNote: any
  @Action('setCategoryColors') setCategoryColors: any
  @Action('hideShowEditorContent') hideShowEditorContent: any

  allCategories!: CategoriesContext[]
  currentNote!: NotesContext
  allNotes!: object[]
  showEditorContent!: boolean

  showContent () {
    this.hideShowEditorContent(true)
  }

  get choosedCategory () {
    return this.currentNote.category
  }
  set choosedCategory (val: string) {
    this.updateCurrentNote({
      category: val
    })
  }

  get notesText () {
    return this.currentNote.text
  }
  set notesText (val: string) {
    this.updateCurrentNote({
      text: val
    })
  }

  get title () {
    return this.currentNote.title
  }
  set title (val: string) {
    this.updateCurrentNote({
      title: val
    })
  }

  get showEditorContentGetSet () {
    return this.showEditorContent
  }
  set showEditorContentGetSet (val: boolean) {
    this.hideShowEditorContent(val)
  }

  get getCategories () {
    return this.allCategories.map((val) => val.category).splice(1)
  }

  setCategoryColor (color: string) {
    const categoryColor = {
      category: this.choosedCategory,
      color
    }
    this.setCategoryColors(categoryColor)
  } 

  setTitle (val: string) {
    this.title = val
  }
}
</script>

<style lang="scss" scoped>
.editor-container {
  width: 100%;
  height: var(--editor-height);
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
.hidden-content {
  display: flex;
  justify-content: space-between;
}
</style>