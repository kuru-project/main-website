<template>
  <div class="flex items-center">
    <h3 class="mr-3">{{ onlineStatus }}</h3>
    <form>
      <input class="shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm" v-model="userEmail" placeholder="Email" />
      <input class="shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm" type="password" v-model="userPassword" placeholder="Password" />
      <button class="no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded shadow mr-3" v-on:click="userRegisterFunction" type="button">Register</button>
      <button class="no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded shadow mr-3" v-on:click="userLoginFunction" type="button">Login</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'User',
  data () {
    return {
      userEmail: '',
      userPassword: ''
    }
  },
  mounted () {
    console.log(this.onlineStatus)
    this.UPDATE_ONLINE_STATUS()
  },
  computed: {
    ...mapState([
      'onlineStatus'
    ])
  },
  methods: {
    ...mapActions([
      'userRegister',
      'userLogin'
    ]),
    ...mapMutations([
      'UPDATE_ONLINE_STATUS'
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
