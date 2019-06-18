<template>
  <header class="p-2 bg-kuru border-b border-kuru-dark">
    <div class="container mx-auto flex items-center">
      <a href="/" class="mr-5 no-underline text-white">
        <h1 v-bind:title="title" class="m-0 p-0 font-roboto-condensed text-2xl text-engraved font-bold">{{ title }}</h1>
      </a>
      <div class="mr-auto text-white text-sm">
        <a href="http://discord.kuru-anime.com/" target="_blank" rel="noopener noreferrer" class="mr-2 hover:text-gray-200"><font-awesome-icon :icon="['fab', 'discord']" /></a>
        <a href="http://facebook.kuru-anime.com/" target="_blank" rel="noopener noreferrer" class="mr-2 hover:text-gray-200"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>
        <a href="http://twitter.kuru-anime.com/" target="_blank" rel="noopener noreferrer" class="hover:text-gray-200"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
      </div>
      <User />
    </div>
  </header>
</template>

<script>
import User from '@/components/part/User'
import { mapState } from 'vuex'

export default {
  name: 'Header',
  components: {
    User
  },
  computed: {
    ...mapState([
      'title'
    ])
  }
}
</script>
