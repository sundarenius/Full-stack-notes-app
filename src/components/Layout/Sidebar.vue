<template>
    <v-navigation-drawer
      :mini-variant="false"
      :permanent="!$smallScreen"
      :temporary="$smallScreen"
      app
      class="sidebar-width"
      fixed
      floating
      v-model="sidebar"
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
      <v-btn depressed class="transparent my-2" block>
        <v-list-item
        >
          <v-list-item-icon>
            <v-icon medium style="margin-top:-6px;margin-left:-15px">mdi-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content style="margin-left:-60px;margin-top:-4px">
            <v-list-item-title>New note</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-btn>
      </v-list>

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

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      <v-btn depressed class="transparent" block>
        <v-list-item
        >
          <v-list-item-icon>
            <v-icon medium style="margin-top:-5px;margin-left:-15px">mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content style="margin-left:-70px">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-btn>
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
      currentCategory: ({ context }: any) => context.currentCategory,
      sidebarState: ({ context }: any) => context.sidebar
    })
  }
})
export default class Sidebar extends Vue {
  @Mutation('setActiveCategory') setActiveCategory: any
  @Mutation('setSidebar') setSidebar: any
  @Action('hideShowEditorContent') hideShowEditorContent: any

  public sidebarState!: boolean
  public allCategories?: CategoriesContext[]
  private currentCategory!: string
  private smallScreenNavigation: object[] = [
    {
      text: 'New note',
      icon: 'mdi-plus',
      action: ''
    },
    {
      text: 'Logout',
      icon: 'mdi-account',
      action: ''
    }
  ]

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

  get sidebar (): boolean {
    return this.sidebarState
  }
  set sidebar (val: boolean) {
    this.setSidebar()
  }

  get getNavigationItems () {
    return this.allCategories || []
  }
}
</script>

<style lang="scss" scoped>
</style>
