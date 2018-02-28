<template>
  <div class="order" @click="toDetail">
    <div class="order-title">
      订单编号：ORDTH123644741852
      <div class="order-title-status">
      待付款
      </div>
    </div>
    <div class="order-body">
      <div class="order-body-title">芒果小酪整箱装x12瓶</div>
      <div class="order-body-time">下单时间：2018-02-28 17:03:22</div>
      <div class="order-body-number">数量x2</div>
    </div>
    <div class="order-footer">
      <div>订单总额：<span class="monay-flg">￥</span><span class="monay-total">599</span></div>
      <div class="order-footer-button">
        <div class="order-footer-button-border"></div>
        <div class="order-footer-button-name" @click.stop="sureReceive($event)">确认收货</div>
      </div>
      <div class="order-footer-button" style="margin-right: 82px;">
        <div class="order-footer-button-border"></div>
        <div class="order-footer-button-name">申请退款</div>
      </div>
      <div class="order-footer-service">
        客服
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      toDetail () {
        this.$emit('toDetail', '123')
      },
      sureReceive (e) {
        console.log(e)
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .order{
    background-color: white;
    margin-bottom: 15px;
    &-title{
      height: 40px;
      position: relative;
      font-size: 12px;
      color: #878787;
      line-height: 40px;
      padding: 0 12px;
      &-status{
        float: right;
        font-size: 15px;
        color: #1bb2cd;
      }
    }
    &-title:after{
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
    &-body{
      padding: 14px 12px 16px;
      position: relative;
      &-title{
        font-size: 15px;
        line-height: 1;
        color: #2a2a2a;
      }
      &-time{
        line-height: 1;
        font-size: 12px;
        color: #5a5a5a;
        margin-top: 15px;
      }
      &-number{
        line-height: 1;
        font-size: 12px;
        color: #5a5a5a;
        margin-top: 12px;
      }
    }
    &-body:after{
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
    &-footer{
      height: 45px;
      line-height: 45px;
      font-size: 12px;
      color: #5a5a5a;
      padding-left: 12px;
      padding-right: 12px;
      clear: both;
      .monay-flg{
        font-size: 14px;
        color: #ff6b12;
      }
      .monay-total{
        font-size: 18px;
        color: #ff6b12;
      }
      &-button{
        width: 70px;
        height: 27px;
        text-align: center;
        line-height: 26px;
        float: right;
        margin-top: -38px;
        position: relative;
        &-border{
          width: 100%;
          height: 100%;
          position: relative;
        }
        &-border:after{
          width: 200%;
          height: 200%;
          position: absolute;
          top: -50%;
          left: -50%;
          content: "";
          border: 1px solid #b1b1b1;
          border-radius: 6px;
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
        }
        &-name{
          position: absolute;
          width: 70px;
          height: 28px;
          text-align: center;
          line-height: 29px;
          color: #5a5a5a;
          top: 0;
          z-index: 10000;
        }

      }
      &-service{
        float: right;
        margin-right: 165px;
        margin-top: -52px;
        background: url('../assets/icons/service-icon@2x.png') no-repeat center;
        background-size: 18px 18px;
        height: 45px;
        box-sizing: border-box;
        padding-top: 16px;
        font-size: 10px;
        color: #5a5a5a;
        text-align: center;
      }
    }
  }
</style>
