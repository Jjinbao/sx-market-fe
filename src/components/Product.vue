<template>
  <div class="product" @click="toProDetail">
    <div class="product-line"></div>
    <div class="product-container">
      <p align="top" class="product-container-title">
        商品小红酒整箱葡萄酒，英国皇家专用葡萄酒500ml*6瓶
      </p>
      <div class="product-container-price" v-bind:class="{'product-container-price-top': !isplace}">
        <div class="new-price"><span class="new-yuan">￥</span>180<span class="old-price" v-show="isplace"><span class="old-yuan">￥</span>650</span>
          <div class="product-weight">
            <span class="sale-num"><span v-show="isplace">销量88</span><span v-show="!isplace">剩余3天</span></span><span class="weight-value">2kg</span>
          </div>
          <div class="group-old-price">
            <span class="old-price"><span class="old-yuan">￥</span>650</span>
          </div>
        </div>

      </div>
      <div class="produce-area" v-show="isplace">
        产地：野三坡
      </div>
      <div class="sold-progress">
        <div class="sold-progress-bar"></div>
        <div class="sold-progress-active"></div>
        <div class="sold-percent">已售85%</div>
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
    props: {
      isplace: {
        type: Boolean,
        default: true
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
        line-height: 1.3;
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
          .group-old-price{
            line-height: 1;
            margin-top: 5px;
            font-size: 10px;
          }
        }


      }
      &-price-top{
        margin-top: 15px;
      }
      .sold-progress{
        position: relative;
        margin-top: 16px;
        .sold-progress-bar{
          width: calc(100% - 27px);
          height: 4px;
          background-color: #e0e0e0;
          border-radius: 4px;
        }
        .sold-progress-active{
          width: calc(100% - 47px);
          height: 4px;
          background-color: #1bb2cd;
          position: absolute;
          top: 0px;
          border-radius: 4px;
        }
        .sold-percent{
          position: absolute;
          top: -8px;
          right: 0px;
          font-size: 12px;
          color: #2a2a2a;
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
