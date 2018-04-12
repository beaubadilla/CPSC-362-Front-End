<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue accent-3">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-alert outline color="red" icon="priority_high" :value=error>
                {{ error }}
              </v-alert>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" prepend-icon="person" name="login" label="User" type="text" placeholder="@csu.fullerton.edu"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/register">
                  <span>Sign Up</span>
                </router-link>
                <v-btn v-on:click="post" color="orange accent-3">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Login',
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    checkCurrentLogin () {
      if (this.$store.getters.isLoggedIn) {
        this.$router.replace(this.$route.query.redirect || '/dashboard')
      }
    },
    post: function () {
      this.axios.post('http://titannotes.jonmouchou.com/api/auth/login', {
        email: this.email,
        password: this.password
      }).then((response) => {
        this.loginSuccessful(response)
        console.log(response)
      }).catch(() => this.loginFailed())
    },
    loginSuccessful (req) {
      if (!req.data.access_token) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data.token
      this.$store.dispatch('login')
      this.$router.replace(this.$route.query.redirect || '/dashboard')
    },
    loginFailed () {
      this.error = 'Login failed!'
      this.$store.dispatch('logout')
    }
  },
  updated () {
    this.checkCurrentLogin()
  },
  created () {
    this.checkCurrentLogin()
  }
}
</script>

<style scoped>
</style>
