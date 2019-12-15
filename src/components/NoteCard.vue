<template>
  <v-layout>
    <v-row>
      <v-col :xs="xs" :sm="sm" :md="md" :key="notes.id" v-for="notes in allNotes">
        <v-card
          @click="setCurrentNoteMethod(notes)"
          :class="{ 'overview-card-style mb-2' : true, [notes.color] : true }"
          >
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
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { NotesContext } from '@/utils/interfaces'
import { Mutation, Action } from 'vuex-class'

@Component({
  name: 'Note-card'
})

export default class NoteCard extends Vue {
  @Mutation('setCurrentNote') setCurrentNote: any
  @Action('hideShowEditorContent') hideShowEditorContent: any

  @Prop(Array) readonly allNotes: any
  @Prop([ String, Number ]) readonly xs: any
  @Prop([ String, Number ]) readonly md: any
  @Prop([ String, Number ]) readonly sm: any

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
}
</script>

<style>

</style>