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
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" prepend-icon="person" name="login" label="User" type="text"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click ="post" color="orange accent-3">Login</v-btn>
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
  name: 'Login',
  data () {
    return {
      title: 'Login',
      emailTitle: 'Email',
      email: '',
      passwordTitle: 'Password',
      password: '',
      forgotPasswordTitle: 'Forgot Password?'
    }
  },
  methods: {
    post: function () {
      this.axios.post('http://titannotes.jonmouchou.com/api/auth/login', {
        email: this.email,
        password: this.password
      }).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
<style scoped>
</style>
