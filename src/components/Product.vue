<template>
  <div class="product" @click="toProDetail">
    <div class="product-line"></div>
    <div class="product-container">
      <p align="top" class="product-container-title">
        商品小红酒整箱葡萄酒，英国皇家专用葡萄酒500ml*6瓶
      </p>
      <div class="product-container-price">
        <div class="new-price"><span class="new-yuan">￥</span>180<span class="old-price"><span class="old-yuan">￥</span>650</span>
          <div class="product-weight">
            <span class="sale-num">销量88</span><span class="weight-value">2kg</span>
        </div>
        </div>

      </div>
      <div class="produce-area">
        产地：野三坡
      </div>
    </div>
    <img class="product-img" src="../assets/1.png">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: ''
      }
    },
    methods: {
      toProDetail () {
        this.$emit('toDetail', {id: 123})
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .product{
    width: 100%;
    height: 144px;
    padding-top: 10px;
    position: relative;
    box-sizing: border-box;
    padding-left: 138px;
    background-color: white;
    &-container{
      height: 115px;
      position: relative;
      padding-right: 12px;
      &-title{
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        -webkit-margin-before:0;
        font-size: 15px;
        line-height: 1.5;
      }
      &-price{
        margin-top: 19px;
        .new-price{
          position: relative;
          color: #ff6b12;
          font-weight: bold;
          font-size: 20px;
          line-height: 1;
          .new-yuan{
            font-weight: normal;
            font-size: 15px;
          }
          .product-weight{
            width: 100%;
            position: absolute;
            left: 0;
            top: 5px;
            text-align: center;
            color: #868686;
            font-size: 13px;
            font-weight: normal;

          }
          .sale-num{
            float: right;
            margin-right: 15px;
          }
          .weight-value{
            float: right;
            margin-right: 30px;
          }
          .old-price{
            font-weight: normal;
            margin-left: 6px;
            line-height: 1;
            text-decoration:line-through;
            color: #b1b1b1;
            font-size: 12px;
            .old-yuan{
              font-size: 11px;
            }
          }
        }


      }
      &-buy{
        position: absolute;
        font-size: 11px;
        padding: 4px 8px 5px;
        line-height: 1;
        color: #868686;
        top: 54px;
        right: 12px;
      }
      .produce-area{
        margin-top: 18px;
        color: #878787;
        font-size: 12px;
        line-height: 1;
      }
    }
    &-img{
      position: absolute;
      top: 14px;
      left: 12px;
      width: 115px;
      height: 115px;
    }
    &-line{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 145px;
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
  }
</style>
