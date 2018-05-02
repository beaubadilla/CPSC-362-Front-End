<template>
<div id="background">
<div id="app">
  <v-app id="inspire">
    <v-content id="background">
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
                <v-form @submit.prevent="validateBeforeSubmit">
                  <v-text-field v-model="email" prepend-icon="person" name="login" label="User" type="text" placeholder="@csu.fullerton.edu" v-validate="'required|max:40|regex:[[a-zA-Z0-9]+@csu.fullerton.edu'" data-vv-delay="1000"></v-text-field>
                  <div v-show="errors.has('email')">{{errors.first('email')}}</div>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" v-validate="'required|min:6'" data-vv-delay="1000"></v-text-field>
                  <div v-show="errors.has('password')">{{errors.first('password')}}</div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/register">Sign Up</router-link>
                <v-btn v-on:click="post" color="orange accent-3" type="submit"> <!--:loading="loading" @click.native="loader = 'loading'" :disabled="loading" -->Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Login',
      email: '',
      password: '',
      error: false,
      loader: null
    }
  },
  methods: {
    checkCurrentLogin () {
      if (this.$store.getters.isLoggedIn) {
        this.$router.replace(this.$route.query.redirect || '/dashboard')
      }
    },
    post: function () {
      this.axios.post('https://titannotes.jonmouchou.com/api/auth/login', {
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
      this.$store.dispatch('login', req.data.access_token)
      this.$router.replace(this.$route.query.redirect || '/home')
    },
    loginFailed () {
      this.error = 'Login failed!'
      this.$store.dispatch('logout')
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.error = false
          this.post()
          this.$router.replace(this.$route.query.redirect || '/')
          return
        }
        this.error = 'There is an error(s)'
      })
    }
  },
  updated () {
    this.checkCurrentLogin()
  },
  created () {
    this.checkCurrentLogin()
  }
  /* watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    }
  } */
}
</script>

<style scoped>
#background {
  background-size: cover;
  background-image: url('../assets/SRC.jpg')
}
#background {
  background-size: cover;
  background-image: url('../assets/SRC.jpg')

}
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
