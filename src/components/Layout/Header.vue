<template>
  <v-app-bar
      app
      clipped-left
      elevate-on-scroll
      class="header-style"
    >
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
      />

      <v-spacer />
      <v-btn @click="setNewNote" class="success lighten-2 secondary--text px-5">
        New note
        <v-icon small class="ml-1">mdi-plus</v-icon>
      </v-btn>
      <v-btn v-if="0" rounded @click="test" class="ml-3 success lighten-2 secondary--text">
        TEST
      </v-btn>
    </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    primaryDrawer: {
      model: null,
      type: 'default (no property)',
      clipped: false,
      floating: false,
      mini: false,
    }
  }),
  methods: {
    ...mapMutations([
      'setCurrentNote',
      'showEditorContent'
    ]),
    ...mapActions([
      'hideShowEditorContent'
    ]),
    test () {
      console.log('test')
      console.log(this.allCategories)
    },
    setNewNote () {
      const note = {
        id: 0,
        title: 'New note',
        text: '',
        category: 'Randoms',
        color: '',
        modified: 0
      }
      this.setCurrentNote(note)
      this.hideShowEditorContent(true)
    }
  },
  computed: {
    ...mapState({
      allCategories: ({ context }) => context.allCategories
    })
  }
}
</script>

<style lang="scss">
.header-style.v-app-bar--fixed.v-app-bar--is-scrolled {
  background-color: #303030 !important;
  z-index: 100;
}
</style>
