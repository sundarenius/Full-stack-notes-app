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
      <v-btn class="success lighten-2 secondary--text px-5">
        New note
        <v-icon small class="ml-1">mdi-plus</v-icon>
      </v-btn>
      <v-btn @click="test" class="success lighten-2 secondary--text px-5">
        TEST
        <v-icon small class="ml-1">mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
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
    test () {
      console.log('test')
      console.log(this.allCategories)
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
}
</style>
