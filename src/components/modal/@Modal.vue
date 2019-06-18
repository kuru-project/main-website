<template>
  <div v-if="modalStatus" v-on:click="closeModal" class="fixed top-0 left-0 w-screen h-screen bg-filter z-50 flex flex-col">
   <div v-on:click="clickModal" class="rounded overflow-hidden shadow-lg bg-white my-auto mx-auto w-full max-w-xs p-4">
     <div v-if="modalState === 'Default'">
       Modal is empty.
     </div>
     <div v-if="modalState === 'Login'">
       <Login />
     </div>
     <div v-if="modalState === 'Register'">
       <Register />
     </div>
     <div v-if="modalState === 'ForgotPassword'">
       <ForgotPassword />
     </div>
   </div>
   <div class="fixed top-0 right-0 m-3">
     <button class="text-white hover:text-gray-300 text-2xl cursor-pointer">
      <font-awesome-icon icon="times" />
     </button>
   </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Login from '@/components/modal/Login'
import Register from '@/components/modal/Register'
import ForgotPassword from '@/components/modal/ForgotPassword'

export default {
  name: 'Modal',
  components: {
    Login,
    Register,
    ForgotPassword
  },
  computed: {
    ...mapState([
      'modalStatus',
      'modalState'
    ])
  },
  methods: {
    ...mapActions([
      'changeModalStatus'
    ]),
    closeModal: function () {
      this.changeModalStatus(false)
    },
    clickModal: function (e) {
      e.stopPropagation()
    }
  }
}
</script>
