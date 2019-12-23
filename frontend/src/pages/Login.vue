<template>
  <div>
    <LoginModal />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LoginModal from '@/components/LoginModal.vue'

@Component({
  name: 'Login',
  components: {
    LoginModal
  }
})

export default class Login extends Vue {
  created () {
    console.log('created from Login.vue')
  }
}
</script>

<style lang="scss" scoped>

</style>