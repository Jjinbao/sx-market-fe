import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Detail from '@/views/Detail'
import Find from '@/views/Find'
import Cart from '@/views/Cart'
import Order from '@/views/Order'
import GroupList from '@/views/GroupList'
import RsbList from '@/views/RsbList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index', // 首页
      component: Index
    },
    {
      path: '/find', // 发现
      name: 'find',
      component: Find
    },
    {
      path: '/cart', // 购物车
      component: Cart
    },
    {
      path: '/order', // 订单列表
      component: Order
    },
    {
      path: '/detail', // 详情
      name: 'detail',
      component: Detail
    },
    // 拼团专区
    {
      path: '/grouplist', // 详情
      name: 'grouplist',
      component: GroupList
    },
    // 荣盛币专区列表
    {
      path: '/rsblist',
      name: 'rsbList',
      component: RsbList
    },
    {
      path: '*',
      component: Index
    }
  ]
})
