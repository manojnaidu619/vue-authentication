import Vue from 'vue'
import Vuex from 'vuex'
import VueJwtDecode from 'vue-jwt-decode'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    signedIn: false,
  },
  mutations:{
    signOut(state){
      state.signedIn = false
      delete localStorage.signInToken
    }
  },
  actions: {
    signOutInterval({ commit }, time) {
      setTimeout(() => {
        commit('signOut')
      }, time)
   }
  }
})
