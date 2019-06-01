import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase/app'
import 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Kuru Anime',
    links: ['http://discord.kuru-anime.com/', 'https://web.kuru-anime.com/', 'https://bot.kuru-anime.com/'],
    onlineStatus: 'offline'
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
    UPDATE_ONLINE_STATUS: (state) => {
      console.log(firebase.auth().currentUser)
      if (firebase.auth().currentUser) {
        state.onlineStatus = 'online'
      } else {
        state.onlineStatus = 'offline'
      }
    }
  },
  actions: {
    removeLink: (context, link) => {
      context.commit('REMOVE_LINK', link)
    },
    userRegister: (context, data) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(function (success) {
        context.commit('UPDATE_ONLINE_STATUS')
      }).catch(function (error) {
        console.log('Error Code:', error.code)
        console.log('Error Message:', error.message)
      })
    },
    userLogin: (context, data) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(function (success) {
        context.commit('UPDATE_ONLINE_STATUS')
      }).catch(function (error) {
        console.log('Error Code:', error.code)
        console.log('Error Message:', error.message)
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
