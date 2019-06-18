<template>
  <div v-if="!userIsOnline">
    <div class="p-4">
      <form>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input id="email" type="email" v-model="userEmail" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input id="password" type="password" v-model="userPassword" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex items-center justify-between">
          <button type="button" v-on:click="userLoginFunction" class="bg-kuru hover:bg-kuru-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          <button type="button" v-on:click="userForgotPasswordFunction" class="inline-block align-baseline font-bold text-sm text-kuru hover:text-kuru-dark cursor-pointer">Forgot Password?</button>
        </div>
      </form>
    </div>
    <div class="border-t px-4 py-2 text-center bg-gray-200 text-xs">
      Don't have an account? <button type="button" v-on:click="registerModal" class="inline-block text-kuru hover:underline cursor-pointer">Register</button> instead.
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

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
    ...mapMutations([
      'UPDATE_MODAL_STATE'
    ]),
    userLoginFunction: function () {
      let credentials = {}
      credentials.email = this.userEmail
      credentials.password = this.userPassword
      this.userLogin(credentials)
    },
    userForgotPasswordFunction: function () {
      this.UPDATE_MODAL_STATE('ForgotPassword')
    },
    registerModal: function () {
      this.UPDATE_MODAL_STATE('Register')
    }
  }
}
</script>
