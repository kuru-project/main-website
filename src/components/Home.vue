<template>
  <div>
    <div class="bg-image bg-cover bg-no-repeat bg-center mb-5">
      <div class="bg-filter bg-pattern">
        <div class="container mx-auto text-center text-white py-20">
          <h2 class="font-robot-condensed text-5xl">{{ title }}</h2>
          <p class="block w-64 mx-auto my-10 leading-normal text-base">Welcome to Kuru Anime community! A place where you can post your drawings, blogs, ideas and much more! Signing up is free and always will be.</p>
          <div>
            <button type="button" class="inline-block m-3 cursor-pointer hover:bg-gray-100 bg-white py-2 text-sm text-kuru rounded shadow-lg text-center w-40">
              <font-awesome-icon icon="user-edit" />
              <span class="ml-1">Register</span>
            </button>
            <button type="button" class="inline-block m-3 cursor-pointer hover:bg-gray-100 bg-white py-2 text-sm text-kuru rounded shadow-lg text-center w-40">
              <font-awesome-icon icon="sign-in-alt" />
              <span class="ml-1">Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">Main Block</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Kuru Anime - El Psy Congroo'
  },
  computed: {
    ...mapState([
      'title'
    ])
  }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/images/Wallpaper.jpg");
}
p.block {
  width: 100%;
  max-width: 600px;
}
</style>
