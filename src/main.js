// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store/store'
import VeeValidate from 'vee-validate'
import InstantSearch from 'vue-instantsearch'
Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.use(InstantSearch)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store:store
})
