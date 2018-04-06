
<template>
<div>
	<div class="login">
		<h1 v-text="title"></h1>
	</div>
	<div>
		<form>
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

</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				title: 'Login',
				emailTitle: 'Email',
				passwordTitle: 'Password',
				forgotPasswordTitle: 'Forgot Password?',
				alreadyMemberTitle: 'Already a member?',
				email:'',
				password:''
			}
		},
		methods: {
			loginAttempt: function() {
				//request?
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
</style>