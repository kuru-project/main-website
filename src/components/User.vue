<template>
  <div>
    <form>
      <input v-model="userEmail" placeholder="Email" />
      <input type="password" v-model="userPassword" placeholder="Password" />
      <button v-on:click="userRegisterFunction" type="button">Register</button>
      <button v-on:click="userLoginFunction" type="button">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'User',
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
