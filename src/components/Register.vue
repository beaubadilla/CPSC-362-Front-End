<template>
<div class="test">
<div>
  <div class="login">
    <h1 class="test2" v-text="title"></h1>
  </div>
  <div>
    <form class="login-box">
      <p v-text="nameTitle"></p>
      <input type="text" v-model="name" v-on:keyup.enter="registerAttempt">
    <p v-text="emailTitle"></p>
      <input type="text" v-model="email" v-on:keyup.enter="registerAttempt">
      <p v-text="passwordTitle"></p>
      <input type="text" v-model="password" v-on:keyup.enter="registerAttempt">
      <p v-text="forgotPasswordTitle"></p>
      <a href="/">{{alreadyMemberTitle}}</a>
      <button v-on:click="registerAttempt">Login</button>
    </form>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      title: 'Register',
      nameTitle: 'Name',
      name: '',
      emailTitle: 'Email',
      email: '',
      passwordTitle: 'Password',
      password: '',
      forgotPasswordTitle: 'Forgot Password?',
      alreadyMemberTitle: 'Already a member?'
    }
  },
  methods: {
    registerAttempt: function (name, email, password) {
      this.axios.post('titannotes.jonmouchou.com/api/auth/register', {name}, {email}, {password}).then(function (response) { console.log(response) })
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
background-color: black;
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
