<template>
  <div class="card-container-overview">
    <v-card
      @click="setCurrentNoteMethod(notes)"
      :class="{ 'overview-card-style mb-2' : true, [notes.color] : true }"
      :key="notes.id" v-for="notes in AllNotes">
      <div class="close-icon">
        <v-icon>mdi-close-circle</v-icon>
      </div>
      <v-card-title justify-center>
        <v-layout wrap>
          <v-col style="padding:0" cols="12">
            <div class="title">
              {{ notes.title }}
            </div>
          </v-col>
          <v-col style="padding:0" cols="12">
            <div class="body-2">
              {{ notes.category }} - {{ getModifiedTime(notes.modified) }}
            </div>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-card-text style="margin-top:-10px">
        {{ notes.text.slice(0, 45) }}...
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Mutation, Action } from 'vuex-class'
import { mapState } from 'vuex'
import { NotesContext } from '@/utils/interfaces'

@Component({
  name: 'All-notes',
  computed: {
    ...mapState({
      colors: ({ context }: any) => context.colors,
      allNotesState: ({ context }: any) => context.allNotes
    })
  }
})

export default class AllNotes extends Vue {
  @Mutation('setCurrentNote') setCurrentNote: any
  @Action('hideShowEditorContent') hideShowEditorContent: any

  private colors!: string[]
  private allNotesState!: NotesContext[]

  setCurrentNoteMethod (notes: any) {
    this.setCurrentNote(notes)
    this.hideShowEditorContent(true)
  }

  getModifiedTime (modified: number) {
    const today = this.todayDate(modified)
    const yesterday = this.yesterDayDate(modified)
    return today || yesterday || new Date(modified).toISOString().slice(0, 10)
  }

  todayDate (modified: number) {
    return (new Date(modified)
            .toISOString().slice(0, 10) ===
            new Date().toISOString().slice(0, 10)) &&
            'Today'
  }

  yesterDayDate (modified: number) {
    return (new Date(modified).toISOString().slice(0, 10) ===
      new Date(new Date()
      .setDate(new Date().getDate() - 1))
      .toISOString().slice(0, 10)) &&
      'Yesterday'
  }

  get AllNotes (): NotesContext[] {
    return this.allNotesState.sort((a, b) => {
      return b.modified - a.modified
    })
  }
}
</script>

<style lang="scss" scoped>
.card-container-overview {
  min-width: 100%;
  .overview-card-style {
    cursor: pointer;
  }
}
</style>