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
    <button v-on:click="removeAllLinks">Remove All Links</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      newLink: '',
      msg: ''
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
      'ADD_LINK',
      'REMOVE_ALL'
    ]),
    ...mapActions([
      'removeLink',
      'removeAll'
    ]),
    addLink: function () {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    removeLinks: function (link) {
      this.removeLink(link)
    },
    removeAllLinks () {
      this.removeAll().then(() => {
        this.msg = 'They have been removed!'
      })
    }
  }
}
</script>
