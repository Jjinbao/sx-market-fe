import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      component: Index
    }
  ]
})
