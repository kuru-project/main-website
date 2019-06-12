<template>
  <div>
    <div class="background-image bg-cover bg-no-repeat bg-center mb-5">
      <div class="background-filter">
        <div class="container mx-auto text-center text-white py-20">
          <h2 class="font-robot-condensed text-4xl">{{ title }}</h2>
          <p class="block w-64 mx-auto my-5 leading-normal">Welcome to Kuru Anime community! A place where you can post your drawings, blogs, ideas and much more! Signing up is free and always will be.</p>
          <div>
            <a href="#Register" class="border-2 inline-block m-3 py-2 text-center rounded w-40">Register</a>
            <a href="#Login" class="border-2 inline-block m-3 py-2 text-center rounded w-40">Login</a>
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
