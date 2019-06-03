<template>
  <div class="flex flex-col bg-gray-100 min-h-screen min-w-screen">
    <Header/>
    <div class="flex-1 my-3">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import '@/assets/styles/main.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import * as firebase from 'firebase/app'
import 'firebase'

import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted () {
    const that = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        that.updateUserIsOnlineFunction(true)
      } else {
        that.updateUserIsOnlineFunction(false)
      }
    })
  },
  methods: {
    ...mapMutations([
      'UPDATE_USER_IS_ONLINE'
    ]),
    updateUserIsOnlineFunction: function (bool) {
      this.UPDATE_USER_IS_ONLINE(bool)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
.font-roboto-condensed {
  font-family: 'Roboto Condensed', sans-serif;
}
body {
  margin: 0;
}
</style>
