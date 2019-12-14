<template>
  <v-layout my-5 fill-height align-center justify-center>
    <v-row class="mt-5 mx-1">
      <v-col cols="8">
        <v-layout class="v-card secondary px-5 py-5">
          <EditorNote />
        </v-layout>
      </v-col>
      <v-col cols="4">
        <v-layout class="v-card secondary px-5 py-5">
          <AllNotes />
        </v-layout>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LoginModal from '@/components/LoginModal.vue'
import AllNotes from '@/components/AllNotes.vue'
import EditorNote from '@/components/EditorNote.vue'

@Component({
  name: 'Home',
  components: {
    AllNotes,
    EditorNote
  }
})

export default class Home extends Vue {
  created () {
    // console.log('created from home.vue')
  }
}
</script>
