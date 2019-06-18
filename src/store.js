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

const facebookProvider = new firebase.auth.FacebookAuthProvider()

firebase.initializeApp(firebaseConfig)

Vue.use(Vuex)

export default new Vuex.Store({
  // STATE
  state: {
    title: 'Kuru Anime',
    userIsOnline: false,
    modalStatus: false,
    modalState: 'Default'
  },
  // GETTERS
  getters: {
  },
  // MUTATIONS
  mutations: {
    UPDATE_USER_IS_ONLINE: (state, bool) => {
      state.userIsOnline = bool
    },
    UPDATE_MODAL_STATUS: (state, bool) => {
      state.modalStatus = bool
    },
    UPDATE_MODAL_STATE: (state, value) => {
      state.modalState = value
    }
  },
  // ACTIONS
  actions: {
    // Register
    userRegister: (context, data) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(function () {
        context.commit('UPDATE_MODAL_STATUS', false)
      }).catch(function (error) {
        console.log(`Register Error: ${error.message} (${error.code})`)
        createSnackbar(`Register Error: ${error.message}`, {
          position: 'right',
          timeout: 5000
        })
      })
    },
    // Login
    userLogin: (context, data) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(function () {
        context.commit('UPDATE_MODAL_STATUS', false)
      }).catch(function (error) {
        console.log(`Login Error: ${error.message} (${error.code})`)
        createSnackbar(`Login Error: ${error.message}`, {
          position: 'right',
          timeout: 5000
        })
      })
    },
    // Login with Facebook
    userFacebookLogin: (context) => {
      firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
        let token = result.credential.accessToken
        let user = result.user
        console.log(token, user)
      }).catch(function (error) {
        let errorCode = error.code
        let errorMessage = error.message
        let email = error.email
        let credential = error.credential
        console.log(errorCode, errorMessage, email, credential)
      })
    },
    // Forgot Password
    userForgotPassword: (context, data) => {
      firebase.auth().sendPasswordResetEmail(data).then(function () {
        context.commit('UPDATE_MODAL_STATUS', false)
        createSnackbar(`Email has been sent!`, {
          position: 'right',
          timeout: 5000
        })
      }).catch(function (error) {
        console.log(`Login Error: ${error.message} (${error.code})`)
        createSnackbar(`Login Error: ${error.message}`, {
          position: 'right',
          timeout: 5000
        })
      })
    },
    // Log Out
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
    },
    // Snack Bar
    snackBar: (context, data) => {
      createSnackbar(data.title, {
        position: data.position,
        timeout: data.timeout
      })
    },
    // Change Modal Status
    changeModalStatus: (context, bool) => {
      context.commit('UPDATE_MODAL_STATUS', bool)
    }
  }
})
