<template>
  <div v-if="!userIsOnline">
    <form>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input id="email" type="email" v-model="userEmail" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div class="flex items-center justify-between">
        <button type="button" v-on:click="userForgotPasswordFunction" class="bg-kuru hover:bg-kuru-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Email</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ForgotPassword',
  data () {
    return {
      userEmail: ''
    }
  },
  computed: {
    ...mapState([
      'userIsOnline'
    ])
  },
  methods: {
    ...mapActions([
      'userForgotPassword'
    ]),
    userForgotPasswordFunction: function () {
      this.userForgotPassword(this.userEmail)
    }
  }
}
</script>
