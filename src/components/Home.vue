<template>
  <div>
    <div v-if="!userIsOnline">
      <div class="bg-image bg-cover bg-no-repeat bg-center mb-5 relative">
        <div class="bg-filter bg-pattern lg:py-10">
          <div class="container mx-auto text-center text-white py-10 lg:py-20 px-10">
            <h2 class="font-bold font-robot-condensed text-4xl">El Psy Congroo</h2>
            <p class="block w-64 mx-auto my-10 leading-normal text-base">Welcome to Kuru Anime community! A place where you can post your drawings, blogs, ideas and much more! Signing up is free and always will be.</p>
            <div>
              <button type="button" v-on:click="loginModal" class="border-2 border-white inline-block m-3 cursor-pointer bg-transparent py-2 text-sm text-white rounded shadow-lg text-center w-40">
                <font-awesome-icon icon="sign-in-alt" />
                <span class="ml-1">Login</span>
              </button>
              <button type="button" v-on:click="registerModal" class="border-2 border-white inline-block m-3 cursor-pointer hover:bg-gray-100 bg-white py-2 text-sm text-kuru rounded shadow-lg text-center w-40">
                <font-awesome-icon icon="user-edit" />
                <span class="ml-1">Register</span>
              </button>
            </div>
          </div>
        </div>
        <a v-bind:href="backgroundArtist" target="_blank" class="opacity-50 text-white text-xs hover:underline inline-block absolute bottom-0 right-0 inline-block m-5">View Background Artist</a>
      </div>
      <div class="container mx-auto">Under Maintenance</div>
    </div>
    <div v-if="userIsOnline === true" class="container mx-auto my-5">
      Under Maintenance
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      backgroundArtist: 'https://www.pixiv.net/member.php?id=3729995'
    }
  },
  metaInfo: {
    title: 'Kuru Anime - El Psy Congroo'
  },
  computed: {
    ...mapState([
      'title',
      'userIsOnline'
    ])
  },
  methods: {
    ...mapActions([
      'changeModalStatus'
    ]),
    ...mapMutations([
      'UPDATE_MODAL_STATE'
    ]),
    loginModal: function () {
      this.changeModalStatus(true)
      this.UPDATE_MODAL_STATE('Login')
    },
    registerModal: function () {
      this.changeModalStatus(true)
      this.UPDATE_MODAL_STATE('Register')
    }
  }
}
</script>

<style scoped>
.bg-image {
  /* background-image: url("~@/assets/images/wallpaper.jpg"); */
  background-image: url("https://imgur.com/XcBtPPE.jpg");
}
p.block {
  width: 100%;
  max-width: 600px;
}
</style>
