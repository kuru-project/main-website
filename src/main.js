// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUserEdit, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord, faFacebookSquare, faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css'

import VueMeta from 'vue-meta'

library.add(faUserSecret, faUserEdit, faSignInAlt, faTimes, faTwitter, faDiscord, faFacebookSquare, faGoogle, faFacebookF)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.use(Tooltip)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
