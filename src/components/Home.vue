<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>There are {{ countLinks }} links.</h3>
    <form @submit.prevent="addLink">
      <input class="link-input" type="text" placeholder="Add a link" v-model="newLink"/>
    </form>
    <ol>
      <li v-for="(link, index) in links" v-bind:key="index">
        {{ link }}
        <button v-on:click="removeLinks(index)">Remove</button>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      newLink: ''
    }
  },
  computed: {
    ...mapState([
      'title',
      'links'
    ]),
    ...mapGetters([
      'countLinks'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    addLink: function () {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    removeLinks: function (link) {
      this.removeLink(link)
    }
  }
}
</script>
