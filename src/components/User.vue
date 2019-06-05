<template>
  <div class="flex items-center">
    <div v-if="userIsOnline === true">
      <button class="no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded shadow mr-3" v-on:click="userLogOutFunction" type="button">Log Out</button>
    </div>
    <div v-if="userIsOnline === false">
      <form>
        <input type="email"     v-model="userEmail"     placeholder="Email"           class="shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm" />
        <input type="password"  v-model="userPassword"  placeholder="Password"        class="shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm" />
        <input type="submit"    v-on:click="userRegisterFunction"  value="Register"   class="cursor-pointer no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded shadow mr-3" />
        <input type="submit"    v-on:click="userLoginFunction"     value="Login"      class="cursor-pointer no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded shadow mr-3"/>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'User',
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
      'userRegister',
      'userLogin',
      'userLogOut'
    ]),
    userRegisterFunction: function () {
      let credentials = {}
      credentials.email = this.userEmail
      credentials.password = this.userPassword
      this.userRegister(credentials)
      this.userEmail = ''
      this.userPassword = ''
    },
    userLoginFunction: function () {
      let credentials = {}
      credentials.email = this.userEmail
      credentials.password = this.userPassword
      this.userLogin(credentials)
      this.userEmail = ''
      this.userPassword = ''
    },
    userLogOutFunction: function () {
      this.userLogOut()
    }
  }
}
</script>
