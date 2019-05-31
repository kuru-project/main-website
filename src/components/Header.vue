<template>
  <header class="p-2 bg-kuru border-b border-kuru-dark">
    <div class="container mx-auto flex items-center">
      <a href="/" class="mr-auto no-underline text-white">
        <h1 v-bind:title="title" class="m-0 p-0 font-roboto-condensed text-2xl">{{ title }}</h1>
      </a>
      <User />
      <form>
        <input v-model="userEmail" placeholder="Email" />
        <input type="password" v-model="userPassword" placeholder="Password" />
        <button v-on:click="userRegisterFunction" type="button">Register</button>
        <button v-on:click="userLoginFunction" type="button">Login</button>
      </form>
    </div>
  </header>
</template>

<script>
import User from '@/components/User'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  components: {
    User
  },
  computed: {
    ...mapState([
      'title'
    ])
  },
  data () {
    return {
      userEmail: '',
      userPassword: ''
    }
  },
  methods: {
    ...mapActions([
      'userRegister',
      'userLogin'
    ]),
    userRegisterFunction: function () {
      let credentials = {}
      credentials.email = this.userEmail
      credentials.password = this.userPassword
      this.userRegister(credentials)
    },
    userLoginFunction: function () {
      let credentials = {}
      credentials.email = this.userEmail
      credentials.password = this.userPassword
      this.userLogin(credentials)
    }
  }
}
</script>
