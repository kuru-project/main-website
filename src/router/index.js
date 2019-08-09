import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Encyclopedia from '@/components/Encyclopedia'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dir/:type/:id',
      name: 'Encyclopedia',
      component: Encyclopedia
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
