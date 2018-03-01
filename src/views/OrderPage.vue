<template>
  <div class="content">
    <header-bar :title="title"></header-bar>
    <div class="content-body">
      <div class="content-body-address">
        <div class="decorate"></div>
        <div class="add-address"><div class="address-line"></div>新建收货地址</div>
      </div>
    </div>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar.vue'
  export default {
    data () {
      return {
        title: '订单'
      }
    },
    components: {
      HeaderBar
    },
    methods: {
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  @import "../styles/themes";

  .content{
    &-body{
      margin-top: 64px;
      &-address{
        background-color: white;
        height: 78px;
        padding-top: 23px;
        position: relative;
        box-sizing: border-box;
        .add-address{
          height: 32px;
          line-height: 32px;
          width: 155px;
          text-align: center;
          margin: 0 auto;
          box-sizing: border-box;
          position: relative;
          color: @common-active-color;
          .address-line{

          }
          .address-line:after{
            .common-line-style;
            border: 1px solid @common-active-color;
          }
        }
        .decorate{
          height: 2px;
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          background: url('../assets/icons/address-line@2x.png') no-repeat left center;
          background-size: 100% 2px;
        }
      }
    }
  }
</style>
