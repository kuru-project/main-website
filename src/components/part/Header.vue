<template>
  <header class="p-2 bg-kuru border-b border-kuru-dark">
    <div class="container mx-auto flex items-center">
      <a href="/" class="mr-auto no-underline text-white">
        <h1 v-bind:title="title" class="m-0 p-0 font-roboto-condensed text-2xl text-engraved">{{ title }}</h1>
      </a>
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
