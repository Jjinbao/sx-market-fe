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
            <span class="weight-value">2kg</span>
          </div>
        </div>
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
  @import "../styles/themes";
  .product{
    width: 100%;
    height: 144px;
    padding-top: 22px;
    position: relative;
    box-sizing: border-box;
    padding-left: 138px;
    background-color: @common-colour-ff;
    height: 145px;
    &-container{
      height: 115px;
      position: relative;
      padding-right: 27px;
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
        margin-top: 30px;
        .new-price{
          position: relative;
          color: @common-collor-orange;
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
          }
          .old-price{
            font-weight: normal;
            margin-left: 6px;
            line-height: 1;
            text-decoration:line-through;
            color: @common-colour-b1;
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
          background-color: @common-colour-e0;
          border-radius: 4px;
        }
        .sold-progress-active{
          width: calc(100% - 47px);
          height: 4px;
          background-color: @common-active-color;
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
        color: @common-colour-87;
        font-size: 12px;
        line-height: 1;
      }
    }
    &-img{
      position: absolute;
      top: 15px;
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
      .common-line-style;
      border-bottom: 1px solid @common-collor-d2;
    }
  }
</style>
