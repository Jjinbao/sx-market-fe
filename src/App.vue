<template>
  <div id="app">
    <keep-alive exclude="Order">
      <router-view></router-view>
    </keep-alive>
    <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="isShowTabbar" slot="bottom" style="position: fixed;left: 0;bottom: 0;background-color: white">
      <tabbar-item :link="{path:'/'}" :selected="urlPath === '/' || urlPath === '/index'">
        <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;"></span>
        <span slot="label">优品</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/find'}" :selected="urlPath === '/find'">
        <span class="demo-icon-22" slot="icon"></span>
        <span slot="label"><span class="vux-demo-tabbar-component"></span><span>发现</span></span>
      </tabbar-item>
      <tabbar-item :link="{path:'/cart'}" :selected="urlPath === '/cart'">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label"><span class="vux-demo-tabbar-component"></span><span>购物车</span></span>
      </tabbar-item>
      <tabbar-item :link="{path:'/order'}" :selected="urlPath === '/order'">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label"><span class="vux-demo-tabbar-component"></span><span>订单</span></span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'
  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem
    },
    computed: {
      urlPath: function () {
        return this.$route.path
      },
      isShowTabbar: function () {
        let nowPath = this.$route.path
        if (nowPath === '/' || nowPath === '/index' || nowPath === '/find' || nowPath === '/cart' || nowPath === '/order') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #f6f6f6;
  }

  .vux-demo-tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>
