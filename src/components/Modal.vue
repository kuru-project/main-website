<template>
  <div v-if="modalStatus" v-on:click="closeModal" class="fixed top-0 left-0 w-screen h-screen bg-filter z-50 flex flex-col">
   <div v-on:click="clickModal" class="rounded overflow-hidden shadow-lg bg-white my-auto mx-auto w-full max-w-xs p-4">
     <div>This is the modal.</div>
   </div>
   <div class="fixed top-0 right-0 m-3">
     <button class="text-white text-2xl cursor-pointer">
      <font-awesome-icon icon="times" />
     </button>
   </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Modal',
  computed: {
    ...mapState([
      'modalStatus'
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
