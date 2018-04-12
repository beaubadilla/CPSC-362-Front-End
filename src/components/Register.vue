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
                  <v-text-field v-model="name" prepend-icon="person" name="Name" label="Name" type="text" v-validate="'required|max:40'" data-vv-delay="1000"></v-text-field>
                  <div v-show="errors.has('Name')">{{errors.first('Name')}}</div>
                  <v-text-field v-model="email" prepend-icon="email" name="email" label="Student Email" type="text" placeholder="@csu.fullerton.edu" v-validate="'required|max:40|regex:[[a-zA-Z0-9]+@csu.fullerton.edu'" data-vv-delay="1000"></v-text-field>
                  <div v-show="errors.has('email')">{{errors.first('email')}}</div>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" placeholder="6 characters minimum" v-validate="'required|min:6'" data-vv-delay="1000"></v-text-field>
                  <div v-show="errors.has('password')">{{errors.first('password')}}</div>
                  <v-text-field v-model="confirmPassword" prepend-icon="lock" name="confirmPassword" label="Confirm Password" id="confirmPassword" type="password" placeholder="6 characters minimum" v-validate="'required|confirmed:password|min:6'" data-vv-delay="1000"></v-text-field>
                  <div v-show="errors.has('confirmPassword')">{{errors.first('confirmPassword')}}</div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/">Already a member?</router-link>
                <v-btn v-on:click="post" color="orange accent-3" :loading="loading" @click.native="loader = 'loading'" :disabled="loading">Register</v-btn>
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
      confirmPassword: '',
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  methods: {
    post: function () {
      this.axios.post('http://titannotes.jonmouchou.com/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword
      }).then((response) => {
        this.$router.push('/')
        console.log(response)
      })
    }
  }
}

</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
