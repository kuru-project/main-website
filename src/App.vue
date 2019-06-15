<template>
  <div class="flex flex-col bg-gray-100 min-h-screen min-w-screen">
    <Modal/>
    <Header/>
    <div class="flex-1">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import '@/assets/styles/main.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

import * as firebase from 'firebase/app'
import 'firebase'

import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Modal,
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
.text-engraved {
  text-shadow: 0px -1px 0px rgba(0,0,0,.5);
}
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
.bg-filter {
  background-color: rgba(0,0,0,.5);
}
</style>
