<template>
<div>
  <div class="login">
    <h1 v-text="title"></h1>
  </div>
  <div>
<<<<<<< HEAD
    <form class="login-box">
=======
    <form>
>>>>>>> b8437ac6e1faa54b049bb341882fac76aa4c2c27
    <p v-text="emailTitle"></p>
      <input type="text" v-model="email" v-on:keyup.enter="loginAttempt">
      <p v-text="passwordTitle"></p>
      <input type="text" v-model="password" v-on:keyup.enter="loginAttempt">
      <p v-text="forgotPasswordTitle"></p>
      <p v-text="alreadyMemberTitle"></p>
      <button v-on:click="loginAttempt">Login</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      title: 'Login',
      emailTitle: 'Email',
      passwordTitle: 'Password',
      forgotPasswordTitle: 'Forgot Password?',
      alreadyMemberTitle: 'Already a member?',
      email: '',
      password: ''
    }
  },
  methods: {
    loginAttempt: function () {
      // request?
    }
  },
  mounted () {
    this.axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      console.log(response)
    })
  }
}
</script>

<style scoped>
<<<<<<< HEAD
.login{
  margin-top: 225px;          /* Probably not the best way to do the margins, but it works for now...*/
  text-align: center;
  font-size: 36px;
  font-family: sans-serif;
  color: orange;
}
.login-box{
    width: 500px;
    height: 380px;
    background: rgba(0, 0, 0, 0.5);      /* this setting makes the login box transparent */
    color: white;
    top: 55%;                            /* Centers the login box */
    left: 50%;                           /* Centers the login box */
    transform: translate(-50%,-50%);     /* Centers the login box */
    position: absolute;
    box-sizing: border-box;
    padding: 30px 20px;
}
=======
>>>>>>> b8437ac6e1faa54b049bb341882fac76aa4c2c27
</style>
