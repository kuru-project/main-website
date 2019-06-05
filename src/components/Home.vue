<template>
  <div class="container mx-auto">
    <h3>Under Maintenance</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Test Title'
  },
  computed: {
    ...mapState([
      'title'
    ])
  }
}
</script>
