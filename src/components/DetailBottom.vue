<template>
  <div class="bottom">
    <div class="bottom-line"></div>
    <div class="bottom-buttons service" @click="openService">
      客服
    </div>
    <div class="bottom-buttons add-cart" @click="addCart">
      加入购物车
    </div>
    <div class="bottom-buttons buy-now" @click="buyNow">
      立即购买
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bottomBar',
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      openService () {
        // 进入客服消息
      },
      addCart () {},
      buyNow () {}
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .bottom{
    position: fixed;
    bottom: 0;
    left:0;
    height: 49px;
    width: 100%;
    background-color: white;
    font-size: 0;
    &-line{
      position: relative;
    }
    &-line:after{
      width: 200%;
      height: 200%;
      position: absolute;
      top: -50%;
      left: -50%;
      content: "";
      border-bottom: 1px solid #d2d2d2;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    &-buttons{
      display: inline-block;
      font-size: 16px;
      text-align: center;
      vertical-align: top;
    }
    .service{
      height: 49px;
      width: 25%;
      background: url('../assets/icons/service-icon@2x.png') no-repeat center 8px;
      background-size: 22px 22px;
      font-size: 10px;
      color: #5a5a5a;
      padding-top: 30px;
    }
    .buy-now{
      background-color: #ff6b12;
      color: white;
      height: 49px;
      line-height: 49px;
      width: 36%;
    }
    .add-cart{
      color: white;
      background-color: #ffb03e;
      height: 49px;
      line-height: 49px;
      width: 39%;
    }
  }
</style>
