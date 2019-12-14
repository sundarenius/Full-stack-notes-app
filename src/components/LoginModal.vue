  
<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title class="toolbar-title center-text">
                  <div>
                    Login to your notes
                  </div>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
                <div class="signup-text">
                  Dont have an account? <span class="primary--text">Sign up here</span>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn block color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LoginModal extends Vue {
  created (): void {
    console.log('created from loginmodal.vue')
  }
}
</script>

<style lang="scss" scoped>
.toolbar-title {
  width: 100%;
}
.signup-text {
  span {
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
