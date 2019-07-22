import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import {store} from './store/store'
import axios from 'axios'

Vue.use(VueRouter)
Vue.config.productionTip = false

axios.defaults.headers.post['Authorization'] = localStorage.signInToken

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
