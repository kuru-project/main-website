import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase/app'
import 'firebase'

import { createSnackbar } from '@egoist/snackbar'
import '@egoist/snackbar/dist/snackbar.css'

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
    userIsOnline: false,
    modalStatus: false
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
        console.log(`Register Error: ${error.message} (${error.code})`)
        createSnackbar(`Register Error: ${error.message}`, {
          position: 'right',
          timeout: 5000
        })
      })
    },
    userLogin: (context, data) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).then().catch(function (error) {
        console.log(`Login Error: ${error.message} (${error.code})`)
        createSnackbar(`Login Error: ${error.message}`, {
          position: 'right',
          timeout: 5000
        })
      })
    },
    userLogOut: (context) => {
      firebase.auth().signOut().then(function () {
        createSnackbar('Sign Out success!', {
          position: 'right',
          timeout: 5000
        })
      }).catch(function () {
        createSnackbar('Error in Sign Out', {
          position: 'right',
          timeout: 5000
        })
      })
    }
  }
})
