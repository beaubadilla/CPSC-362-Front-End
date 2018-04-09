<template>
<div class="test">
<div>
  <div class="login">
    <h1 class="test2" v-text="title"></h1>
  </div>
  <div>
    <form class="login-box">
    <p v-text="emailTitle"></p>
      <input type="text" v-model="email" v-on:keyup.enter="loginAttempt">
      <p v-text="passwordTitle"></p>
      <input type="text" v-model="password" v-on:keyup.enter="loginAttempt">
      <p v-text="forgotPasswordTitle"></p>
      <button v-on:click="loginAttempt">Login</button>
    </form>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      title: 'Login',
      emailTitle: 'Email',
      passwordTitle: 'Password',
      forgotPasswordTitle: 'Forgot Password?',
      email: ''
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
.test {
background-size:cover;
background-color: grey;
}
.test2 {/*Login Title*/
margin-top: 225px;
text-align: center;
font-size: 36px;
font-family: sans-serif;
color:orange;
border: solid black;
}
.login-box {
width: 500px;
height: 380px;
background: rgba(0, 0, 0, 0.5);
color: white;
position: absolute;
top: 55%;
left: 50%;
transform: translate(-50%, -50%);
box-sizing: border-box;
padding: 30px 20px;
}
.login-box p{
margin: 0;
padding: 5;
font-weight: bold;
}
.login-box input {
width: 100%;
margin-bottom: 20px;
}
.login-box button {
width: 100%;
border: none;
outline: none;
height: 40px;
background: royalBlue;
color: white;
font-size: 18px;
border-raidus: 20px;
}
</style>
