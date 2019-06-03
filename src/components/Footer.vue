<template>
  <div class="text-center bg-gray-700 text-white p-5">
    {{ title }} &copy; {{ year }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  },
  computed: {
    ...mapState([
      'title'
    ])
  }
}
</script>
