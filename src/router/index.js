import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Detail from '@/views/Detail'
import Find from '@/views/Find'
import Cart from '@/views/Cart'
import Order from '@/views/Order'
import GroupList from '@/views/GroupList'
import RsbList from '@/views/RsbList'
import GoodList from '@/views/GoodList'
import GroupDetail from '@/views/GroupDetail'
import GoodProDetail from '@/views/GoodProDetail'
import RsbDetail from '@/views/RsbDetail'
import SeckillDetail from '@/views/SeckillDetail'
import OrderDetail from '@/views/OrderDetail'
import OrderPage from '@/views/OrderPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  },
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
    // 盛行优选列表
    {
      path: '/goodlist',
      name: 'goodList',
      component: GoodList
    },
    // 去拼团详情
    {
      path: '/groupdetail/:id',
      name: 'groupDetail',
      component: GroupDetail
    },
    // 优品详情
    {
      path: '/gooddetail/:id',
      name: 'goodDetail',
      component: GoodProDetail,
      meta: { scrollToTop: true }
    },
    // 荣盛币详情
    {
      path: '/rsbdetail/:id',
      name: 'rsbDetail',
      component: RsbDetail
    },
    // 秒杀详情
    {
      path: '/seckill/:id',
      name: 'seckillDetail',
      component: SeckillDetail,
      meta: { scrollToTop: true }
    },
    // 订单详情
    {
      path: '/orderdetail',
      name: 'orderDetail',
      component: OrderDetail
    },
    // 下单界面
    {
      path: '/orderpage',
      name: 'orderPage',
      component: OrderPage
    },
    {
      path: '*',
      component: Index
    }
  ]
})
