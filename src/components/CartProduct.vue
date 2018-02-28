<template>
  <div class="cart">
    <div class="cart-line">
    </div>
    <div class="cart-body">
      <div class="cart-body-title">
        芒果味小麻薯整包装
      </div>
      <div class="cart-body-subtitle">
        包装重量:<span>2kg</span>
      </div>
      <div class="cart-body-price">
        <span class="rmb-flg">￥</span><span class="rmb-money">120</span>
      </div>
      <img class="cart-body-img" src="../assets/cart-img.jpg"/>
      <div class="cart-body-choice"></div>
      <div class="buy-number">
        <img class="buy-minus" src="../assets/icons/minus@2x.png"/>
        <img v-show="buyNumber > 1" @click="minusNumber" class="buy-minus" src="../assets/icons/minus-active@2x.png"/>
        {{buyNumber}}
          <img class="buy-plus" @click="addNumber" src="../assets/icons/plus@2x.png"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        buyNumber: 1
      }
    },
    methods: {
      addNumber () {
        this.buyNumber ++
      },
      minusNumber () {
        if (this.buyNumber === 1) {
          return
        }
        this.buyNumber --
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .cart{
    background-color: white;
    padding-left: 45px;
    position: relative;
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
      border-top: 1px solid #d2d2d2;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    &-body{
      padding-top: 10px;
      padding-bottom: 23px;
      padding-left: 115px;
      &-title{
        margin-top: 7px;
        line-height: 1;
        font-size: 14px;
        color: #2a2a2a;
      }
      &-subtitle{
        font-size: 12px;
        color: #b1b1b1;
        line-height: 1;
        margin-top: 14px;
        span{
          margin-left: 6px;
        }
      }
      &-price{
        line-height: 1;
        margin-top: 30px;
        color: #ff6b12;
        .rmb-flg{
          font-size: 15px;
        }
        .rmb-money{
          font-size: 22px;
          font-weight: bold;
        }
      }
      &-img{
        width: 100px;
        height: 100px;
        position: absolute;
        top: 10px;
        left: 45px;
        vertical-align: top;
      }
      &-choice{
        width: 45px;
        height: 40px;
        position: absolute;
        top: 40px;
        left: 0;
        background: url(../assets/icons/cart-detault@2x.png) no-repeat 15px center;
        background-size: 20px 20px;
      }
      &-choice-active{
        background: url(../assets/icons/cart-select@2x.png) no-repeat 15px center;
        background-size: 20px 20px;
      }
      .buy-number{
        position: absolute;
        bottom: 19px;
        right: 15px;
        height: 26px;
        width: 86px;
        background-color: #f1f1f1;
        border-radius: 20px;
        text-align: center;
        line-height: 26px;
        color: #2a2a2a;
        font-size: 17px;
        img{
          position: absolute;
          top: 2px;
          height: 22px;
          width: 22px;
        }
        .buy-minus{
          left: 2px;
        }
        .buy-plus{
          right: 2px;
        }
      }

    }
  }
</style>
