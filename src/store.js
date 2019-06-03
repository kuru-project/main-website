import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase/app'
import 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCz3laxK1vMpEpjJFXSx8UyzlH7mE4KBT0',
  authDomain: 'kuru-anime-network.firebaseapp.com',
  databaseURL: 'https://kuru-anime-network.firebaseio.com',
  projectId: 'kuru-anime-network',
  storageBucket: 'kuru-anime-network.appspot.com',
  messagingSenderId: '195377790597',
  appId: '1:195377790597:web:a9007d1707775d3f'
}

firebase.initializeApp(firebaseConfig)

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
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then().catch(function (error) {
        console.log(`Error: ${error.message} (${error.code})`)
      })
    },
    userLogin: (context, data) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).then().catch(function (error) {
        console.log(`Error: ${error.message} (${error.code})`)
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
