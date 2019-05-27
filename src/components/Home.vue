<template>
  <h1>{{ title }}</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState([
      'title'
    ])
  }
}
</script>
