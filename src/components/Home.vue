<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>There are {{ countLinks }} links.</h3>
    <ol>
      <li v-for="(link, index) in links" v-bind:key="index">{{ link }}</li>
    </ol>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState([
      'title',
      'links'
    ]),
    ...mapGetters([
      'countLinks'
    ])
  }
}
</script>
