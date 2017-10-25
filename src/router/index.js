import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../components/recommend/recommend.vue'
import singer from '../components/singer/singer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    }
  ]
})
