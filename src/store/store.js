import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    signedIn: false
  },
  mutations:{
    signOut(state){
      state.signedIn = false
      delete localStorage.signInToken
    }
  },
  actions: {
    signOutInterval({ commit }) {
      setTimeout(() => {
        commit('signOut')
      }, 5000)
    }
  }
})
