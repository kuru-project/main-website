<template>
  <div>
    <div class="background-image bg-cover bg-no-repeat bg-center mb-5">
      <div class="background-filter">
        <div class="container mx-auto text-center text-white py-20">
          <h2 class="font-robot-condensed text-5xl">{{ title }}</h2>
          <p class="block w-64 mx-auto my-10 leading-normal text-base">Welcome to Kuru Anime community! A place where you can post your drawings, blogs, ideas and much more! Signing up is free and always will be.</p>
          <div>
            <button type="button" class="inline-block m-3 cursor-pointer hover:bg-gray-100 bg-white py-2 text-sm text-kuru rounded shadow-lg text-center w-40">Register</button>
            <button type="button" class="inline-block m-3 cursor-pointer hover:bg-gray-100 bg-white py-2 text-sm text-kuru rounded shadow-lg text-center w-40">Login</button>
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
.background-image {
  background-image: url("../assets/images/Wallpaper.jpg");
}
.background-filter {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  background-color: rgba(0,0,0,.5);
}
p.block {
  width: 100%;
  max-width: 600px;
}
</style>
