/*eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Toolbar from '@/components/Toolbar'
import Examplecard from '@/components/examplecard'
import NotesExample from '@/components/NotesExample'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Login',
		component: Login
    },
    {
    	path: '/register',
    	name: 'Register',
    	component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Toolbar,
      children: [
        {
          path: '/examplecard',
          name: 'Examplecard',
          component: Examplecard
        },
        {
          path: '/NotesExample',
          name: 'NotesExample',
          component: NotesExample
        }
      ]
    }
    
  ]
})
