<template>
  <div>
    <div id="coverImage" class="h-0 overflow-hidden relative">
      <div class="absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-gray-400">
        <img v-bind:src="mainData.attributes.coverImage.small" v-bind:alt="mainData.attributes.titles.en_jp" v-bind:title="mainData.attributes.titles.en_jp" class="w-full h-full"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Encyclopedia',
  computed: {
    ...mapState([
      'animeData',
      'mangaData'
    ]),
    mainData () {
      return this.$route.params.type === 'anime' ? this.animeData : this.mangaData
    }
  },
  methods: {
    ...mapActions([
      'fetchEncyclopediaData'
    ])
  },
  mounted () {
    this.fetchEncyclopediaData({
      type: this.$route.params.type,
      id: this.$route.params.id
    })
  }
}
</script>

<style scoped>
#coverImage {
  padding-top: 23.8%;
}
</style>
