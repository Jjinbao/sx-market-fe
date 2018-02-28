<template>
  <div class="content">
    <header-bar :title="title"
                :page-index="pageIndex"></header-bar>
    <div class="content-body content-subheader">
      <div class="content-body-subheader">
        <div class="sub-line"></div>
        <div class="sub-content">
          <div class="sub-tab-item sub-tab-active">全部</div>
          <div class="sub-tab-item">待付款</div>
          <div class="sub-tab-item">待发货</div>
          <div class="sub-tab-item">待收货</div>
          <div class="sub-tab-item">申请退单</div>
        </div>
      </div>
      <order-product v-on:toDetail="toOrderDetail"></order-product>
      <order-product v-on:toDetail="toOrderDetail"></order-product>
    </div>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar.vue'
  import OrderProduct from '../components/OrderProduct.vue'
  export default {
    data () {
      return {
        title: '我的订单',
        pageIndex: 1
      }
    },
    components: {
      HeaderBar,
      OrderProduct
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      toOrderDetail () {
        console.log(123)
        this.$router.push({
          name: 'orderDetail'
        })
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .content{
    h1{
      color: red;
    }
    &-body{
      margin-top: 64px;
      &-subheader{
        background-color: white;
        height: 44px;
        position: relative;
        .sub-line{
          position: absolute;
          width: 100%;
          height: 44px;
        }
        .sub-line:after{
          width: 200%;
          height: 200%;
          position: absolute;
          top: -50%;
          left: -50%;
          content: "";
          border-bottom: 1px solid #e0e0e0;
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
        }
        .sub-content{
          height: 44px;
          box-sizing: border-box;
          font-size: 0;
          padding-left: 17px;
          padding-right: 10px;
        }
        .sub-tab-item{
          display: inline-block;
          font-size: 14px;
          color: #2a2a2a;
          line-height: 44px;
          height: 44px;
          box-sizing: border-box;
          text-align: center;
          width: 20%;
        }
        .sub-tab-active{
          border-bottom: 2px solid #1bb2cd;
          color: #1bb2cd;
        }
      }
    }
    &-subheader{

    }
  }
</style>
