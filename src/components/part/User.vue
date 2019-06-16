<template>
  <div class="flex items-center">
    <div v-if="userIsOnline === true">
      <button class="no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded shadow mr-3" v-on:click="userLogOutFunction" type="button">Log Out</button>
    </div>
    <div v-if="userIsOnline === false">
      Login and Register buttons here!
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
