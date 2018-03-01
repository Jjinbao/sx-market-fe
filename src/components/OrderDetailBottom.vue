<template>
  <div class="bottom">
    <div class="bottom-line"></div>
    <div class="bottom-buttons service" @click="openService">
      在线咨询
    </div>
    <div class="bottom-buttons add-cart" @click="addCart">
      <div class="line-left"></div>
      取消订单
    </div>
    <div class="bottom-buttons buy-now" @click="buyNow">
      去支付
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
  @import "../styles/themes";
  .bottom{
    position: fixed;
    bottom: 0;
    left:0;
    height: 49px;
    width: 100%;
    background-color: @common-colour-ff;
    font-size: 0;
    &-line{
      position: relative;
    }
    &-line:after{
      .common-line-style;
      border-bottom: 1px solid @common-collor-d2;
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
      background-color: @common-active-color;
      color: @common-colour-ff;
      height: 49px;
      line-height: 49px;
      width: 36%;
    }
    .add-cart{
      color: #5a5a5a;
      height: 49px;
      line-height: 49px;
      width: 39%;
      position: relative;
      .line-left{
        height: 49px;
        position: absolute;
        left: 0;
        top: 0;
      }
      .line-left:after{
        .common-line-style;
        border-left: 1px solid @common-collor-d2;
      }
    }
  }
</style>
