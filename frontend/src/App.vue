<template>
  <v-app>
    <Header v-if="isAuth" />
    <Sidebar v-if="isAuth" />
    <div :class="{ 'main-content-style' : isAuth }">
      <router-view />
    </div>
  </v-app>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import LoginModal from '@/components/LoginModal.vue'
import Header from '@/components/Layout/Header.vue'
import Sidebar from '@/components/Layout/Sidebar.vue'
import { setUpCssVars } from '@/utils/helpers'
import { NotesContext } from '@/utils/interfaces'

@Component({
  components: {
    LoginModal,
    Header,
    Sidebar
  },
  computed: {
    ...mapState({
      isAuth: ({ context }: any) => context.isAuth
    })
  }
})
export default class App extends Vue {
  @Action('setInitialData') setInitialData: any

  $vuetify!: any

  isAuth!: boolean

  created () {
    console.log('created from app.vue')
    setUpCssVars(undefined, undefined)
    this.setInitialData()
    this.$vuetify.theme.dark = true
    if (!this.isAuth) {
      this.$router.push('/login')
    }
  }
}
</script>
