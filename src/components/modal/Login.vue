<template>
  <div v-if="userIsOnline === false">
    <form>
      <input type="email" v-model="userEmail" placeholder="Email" class="shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm" />
      <input type="password" v-model="userPassword" placeholder="Password" class="shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm" />
      <button type="button" v-on:click="userLoginFunction" class="cursor-pointer no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded shadow mr-3">Login</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      userEmail: '',
      userPassword: ''
    }
  },
  computed: {
    ...mapState([
      'userIsOnline'
    ])
  },
  methods: {
    ...mapActions([
      'userLogin'
    ]),
    userLoginFunction: function () {
      let credentials = {}
      credentials.email = this.userEmail
      credentials.password = this.userPassword
      this.userLogin(credentials)
    }
  }
}
</script>
