<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/assets/styles/main.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
