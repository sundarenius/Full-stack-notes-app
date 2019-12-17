<template>
  <div class="card-container-overview">
    <h2 class="title mb-2" style="margin-top:-8px">Latest</h2>
    <NoteCard :cols="12" :allNotes="allNotes" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { NotesContext } from '@/utils/interfaces'
import NoteCard from '@/components/NoteCard'

@Component({
  name: 'All-notes',
  components: {
    NoteCard
  },
  computed: {
    ...mapState({
      colors: ({ context }: any) => context.colors,
      allNotesState: ({ context }: any) => context.allNotes
    })
  }
})

export default class AllNotes extends Vue {

  private colors!: string[]
  private allNotesState!: NotesContext[]

  get allNotes (): NotesContext[] {
    return [ ...this.allNotesState ].sort((a, b) => {
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