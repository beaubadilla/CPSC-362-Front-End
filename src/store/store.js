import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

export const store = new Vuex.Store({
  state: { // data you want to share among components
    isLoggedIn: localStorage.getItem('token')
  },
  mutations: {
    [LOGIN] (state) {
      state.isLoggedIn = true
      state.pending = false
    },
    [LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true
      state.pending = false
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  },
  actions: {
    login ({commit}, creds) {
      commit(LOGIN)
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem('token', creds)
          commit(LOGIN_SUCCESS)
          resolve()
        }, 1000)
      })
    },
    logout ({commit}) {
      localStorage.removeItem('token')
      commit(LOGOUT)
    }
  }
})
