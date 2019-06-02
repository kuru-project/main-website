import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase/app'
import 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Kuru Anime',
    userIsOnline: false
  },
  getters: {
  },
  mutations: {
    UPDATE_USER_IS_ONLINE: (state, bool) => {
      state.userIsOnline = bool
    }
  },
  actions: {
    userRegister: (context, data) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password).catch(function (error) {
        console.log('Error Code:', error.code)
        console.log('Error Message:', error.message)
      })
    },
    userLogin: (context, data) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).catch(function (error) {
        console.log('Error Code:', error.code)
        console.log('Error Message:', error.message)
      })
    },
    userLogOut: (context) => {
      firebase.auth().signOut().then(function () {
        console.log('Sign Out success!')
      }).catch(function () {
        console.log('Error in Sign Out')
      })
    }
  }
})
