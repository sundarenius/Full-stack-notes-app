  
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
                    label="Email"
                    name="Email"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="user.email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="user.password"
                  />
                </v-form>
                <div class="signup-text">
                  Dont have an account? <span @click="signUpModal" class="primary--text">Sign up here</span>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  :disabled="!loginBtn"
                  @click="loginMethod"
                  block
                  color="primary">
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-dialog max-width="600" v-model="showSignUpModal">
      <v-card class="py-5 px-5">
        <v-card-title class="justify-center">
          <div class="title">
            Sign Up
          </div>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              required
              label="Full name"
              name="Name"
              prepend-icon="mdi-account"
              type="text"
              v-model="newUser.name"
            />
             <v-text-field
              required
              label="Username"
              name="Username"
              prepend-icon="mdi-account"
              type="text"
              v-model="newUser.userName"
            />
            <v-text-field
              required
              label="Email"
              name="Email"
              prepend-icon="mdi-mail"
              type="text"
              v-model="newUser.emailAddress"
            />
            <v-text-field
              required
              label="Password"
              name="Password"
              prepend-icon="mdi-key"
              type="text"
              v-model="newUser.password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="!signUpBtn" class="success" @click="signUp">Sign up</v-btn>
          <v-btn @click="showSignUpModal = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class LoginModal extends Vue {
  @Action('logIn') logIn: any
  @Action('registerUser') registerUser: any

  showSignUpModal: boolean = false
  newUser: any = {
    name: '',
    emailAddress: '',
    userName: '',
    password: ''
  }
  user: any = {
    email: '',
    password: ''
  }

  get loginBtn () {
    return this.user.email.length > 3 && this.user.password.length > 5
  }

  get signUpBtn () {
    return this.newUser.name.length > 3 && this.newUser.emailAddress.length > 3 &&
    this.newUser.userName.length > 3 && this.newUser.password.length > 5
  }

  signUpModal () {
    this.showSignUpModal = true
  }

  signUp () {
    this.registerUser(this.newUser)
  }

  loginMethod () {
    this.logIn(this.user)
  }
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
