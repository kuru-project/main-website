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
