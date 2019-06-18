<template>
  <div class="flex items-center">
    <div v-if="userIsOnline">
      <button class="no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded shadow mr-3" v-on:click="userLogOutFunction" type="button">Log Out</button>
    </div>
    <div v-if="!userIsOnline">
      <div>
        <button type="button" v-on:click="loginModal" class="border-2 border-white inline-block cursor-pointer bg-transparent py-1 px-5 text-sm text-white rounded shadow-lg text-center">
          <font-awesome-icon icon="sign-in-alt" />
          <span class="ml-1">Login</span>
        </button>
        <button type="button" v-on:click="registerModal" class="border-2 border-white inline-block ml-3 cursor-pointer hover:bg-gray-100 bg-white py-1 px-5 text-sm text-kuru rounded shadow-lg text-center">
          <font-awesome-icon icon="user-edit" />
          <span class="ml-1">Register</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'User',
  computed: {
    ...mapState([
      'userIsOnline'
    ])
  },
  methods: {
    ...mapActions([
      'userLogOut'
    ]),
    userLogOutFunction: function () {
      this.userLogOut()
    }
  }
}
</script>
