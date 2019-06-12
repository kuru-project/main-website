<template>
  <div>
    <div class="bg-red-200">
      <div class="container mx-auto">Top Block</div>
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
