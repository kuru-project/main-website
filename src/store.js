import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase/app'
import 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Kuru Anime',
    links: ['http://discord.kuru-anime.com/', 'https://web.kuru-anime.com/', 'https://bot.kuru-anime.com/'],
    userIsOnline: false
  },
  getters: {
    countLinks: state => state.links.length
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {
      state.links = []
    },
    UPDATE_USER_IS_ONLINE: (state, bool) => {
      state.userIsOnline = bool
    }
  },
  actions: {
    removeLink: (context, link) => {
      context.commit('REMOVE_LINK', link)
    },
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
    },
    removeAll ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  }
})
