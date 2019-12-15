<template>
    <v-navigation-drawer
      :mini-variant="false"
      permanent
      app
      class="sidebar-width"
      fixed
      floating
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Notes app
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="nav in getNavigationItems"
          :key="nav.id"
          link
          @click="setActiveCategoryMethod(nav.category)"
          :class="{ 'active-category' : isActive(nav.category) }"
        >
          <v-list-item-icon>
            <v-icon :class="{ [textColor(nav.color)] : true }">{{ nav.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content style="margin-left:-15px">
            <v-list-item-title :class="{ [textColor(nav.color)] : true }">{{ nav.category }} ( {{ nav.total }} )</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Mutation, Action } from 'vuex-class'
import { mapState } from 'vuex'
import { CategoriesContext, NotesContext } from '@/utils/interfaces'

@Component({
  name: 'Sidebar',
  computed: {
    ...mapState({
      allCategories: ({ context }: any) => context.allCategories,
      currentCategory: ({ context }: any) => context.currentCategory
    })
  }
})
export default class Sidebar extends Vue {
  @Mutation('setActiveCategory') setActiveCategory: any
  @Action('hideShowEditorContent') hideShowEditorContent: any

  public allCategories?: CategoriesContext[]
  private currentCategory!: string

  setActiveCategoryMethod (category: string) {
    this.hideShowEditorContent(false)
    this.setActiveCategory(category)
  }

  textColor (color: string): string {
    const splitted = (color && color.split(' ')[0])
    return `${splitted}--text text--lighten-2`
  }

  isActive (category: string) {
    return category === this.currentCategory
  }

  get getNavigationItems () {
    return this.allCategories || []
  }
}
</script>

<style lang="scss" scoped>
</style>
