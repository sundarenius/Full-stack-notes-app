<template>
  <v-layout my-5 fill-height align-center justify-center>
    <v-row class="mt-5 mx-1">
      <v-col cols="8">
        <v-layout class="v-card secondary px-5 py-5">
          <EditorNote />
        </v-layout>
        <div v-if="!showEditorContent" class="my-5">
          <NoteCard :xs="12" :sm="4" :md="6" :allNotes="allNotes" />
        </div>
      </v-col>
      <v-col cols="4">
        <v-layout class="v-card secondary px-5 py-5 allnotes-section">
          <AllNotes />
          <div class="bottom-div"></div>
        </v-layout>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import LoginModal from '@/components/LoginModal.vue'
import AllNotes from '@/components/AllNotes.vue'
import EditorNote from '@/components/EditorNote.vue'
import NoteCard from '@/components/NoteCard'
import { NotesContext } from '@/utils/interfaces'

@Component({
  name: 'Home',
  components: {
    AllNotes,
    EditorNote,
    NoteCard
  },
  computed: {
    ...mapState({
      showEditorContent: ({ context }: any): boolean => context.showEditorContent,
      allNotesState: ({ context }: any) => context.allNotes,
      currentCategory: ({ context }: any) => context.currentCategory
    })
  }
})

export default class Home extends Vue {
  allNotesState!: NotesContext[]
  currentCategory!: string

  get allNotes (): NotesContext[] {
    return [ ...this.allNotesState ].sort((a, b) => {
      return b.modified - a.modified
    }).filter((el: any) => (el.category === this.currentCategory) || this.currentCategory === 'All')
  }
}
</script>

<style lang="scss" scoped>
.allnotes-section {
  position: relative;
  height: 85vh;
  overflow: scroll;
  .bottom-div {
    height: 10px;
    width: 100%;
    background: green;
  }
}
</style>
