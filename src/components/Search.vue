<template>
  <div class="container mx-auto flex mt-5">
    <div class="w-64 mr-5">
      <form class="block" @submit.prevent="searchFunction">
        <input type="text" placeholder="Search" v-model="searchField" class="mb-5 smooth-transition focus:shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
      </form>
      <div class="text-sm">
        <h4 class="mb-3 text-gray-500 uppercase font-bold">Search Type</h4>
        <button type="button" v-on:click="searchTypeAnimeFunction" v-bind:class="searchType === 'Anime' ? searchTypeActive : searchTypeInactive">Anime</button>
        <button type="button" v-on:click="searchTypeMangaFunction" v-bind:class="searchType === 'Manga' ? searchTypeActive : searchTypeInactive">Manga</button>
      </div>
    </div>
    <div class="flex-1">
      <ul class="grid-container">
        <!--
          ID:       {{ data.id }}
          Type:     {{ data.type }}
          Title:    {{ data.attributes.titles.en_jp }}
          Synopsis: {{ data.attributes.synopsis }}
          Rating:   {{ data.attributes.averageRating }}
          Poster:   {{ data.attributes.posterImage.small }}
          Episodes: {{ data.attributes.episodeCount }}
          Chatpers: {{ data.attributes.chapterCount }}
        -->
        <li v-for="data in searchData" v-bind:key="data.id" class="mx-2 mb-5 rounded overflow-hidden shadow bg-white text-sm relative hover:shadow-outline smooth-transition">
          <router-link v-bind:to="`/dir/${data.type}/${data.id}`">
          <div>
            <img v-bind:src="data.attributes.posterImage.small" v-bind:alt="data.attributes.titles.en_jp" class="w-full" />
          </div>
          <div class="text-shadow absolute bottom-0 left-0 right-0 w-full bg-filter py-2 px-3 text-white">
            {{ data.attributes.titles.en_jp }}
          </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      searchField: '',
      searchTypeInactive: 'block py-1 px-3 mb-2 rounded w-full text-left text-gray-600',
      searchTypeActive: 'block py-1 px-3 mb-2 rounded bg-white w-full text-left font-bold text-gray-600'
    }
  },
  computed: {
    ...mapState([
      'searchType',
      'searchData'
    ])
  },
  methods: {
    ...mapActions([
      'searchEncyclopediaData'
    ]),
    ...mapMutations([
      'UPDATE_SEARCH_TYPE'
    ]),
    searchTypeAnimeFunction: function () {
      this.UPDATE_SEARCH_TYPE('Anime')
      this.searchEncyclopediaData(this.searchField)
    },
    searchTypeMangaFunction: function () {
      this.UPDATE_SEARCH_TYPE('Manga')
      this.searchEncyclopediaData(this.searchField)
    },
    searchFunction: function () {
      this.searchEncyclopediaData(this.searchField)
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
