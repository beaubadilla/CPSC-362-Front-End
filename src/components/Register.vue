<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue accent-3">
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="name" prepend-icon="person" name="Name" label="Name" type="text"></v-text-field>
                  <v-text-field v-model="email" prepend-icon="person" name="login" label="Student Email" type="text" placeholder="@csu.fullerton.edu"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" placeholder="6 characters minimum"></v-text-field>
                  <v-text-field v-model="confirmPassword" prepend-icon="lock" name="confirmPassword" label="Confirm Password" id="confirmPassword" type="password" placeholder="6 characters minimum"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <span>Already a member?</span>
                <v-btn v-on:click="post" color="orange accent-3">Register</v-btn>
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
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    post: function () {
      this.axios.post('http://titannotes.jonmouchou.com/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword
      }).then(function (data) {
        console.log(data)
      })
    }
  }
}

</script>

<style scoped>
</style>
