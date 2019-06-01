<template>
  <div class="bg-gray-100 min-h-screen min-w-screen">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import '@/assets/styles/main.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('User is signed in.')
  } else {
    console.log('User is signed out.')
  }
})

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
