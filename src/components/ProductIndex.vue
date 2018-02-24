<template>
  <div class="product">
    <div class="product-container">
      <p align="top" class="product-container-title">
        商品小红酒整箱葡萄酒，英国皇家专用葡萄酒500ml*6瓶
      </p>
      <div class="product-container-price">
        <div class="new-price"><span>￥</span>18
          <div class="product-weight">
            2kg
          </div>
        </div>
        <div class="old-price"><span>￥</span>65</div>
      </div>
      <div class="product-container-buy">
        马上抢
      </div>
      <div class="product-container-progress">
        <div class="progress-bar"></div>
        <div class="progress-bar-active"></div>
        <div class="sald-progress">
          已售85%
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
    methods: {
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .product{
    width: 100%;
    height: 115px;
    position: relative;
    box-sizing: border-box;
    padding-left: 138px;
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
      }
      &-price{
        margin-top: 12px;
        .new-price{
          position: relative;
          color: #ff6b13;
          font-weight: bold;
          font-size: 17px;
          line-height: 1;
          span{
            font-weight: normal;
            font-size: 11px;
          }
          .product-weight{
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            text-align: center;
            color: #868686;
            font-size: 13px;
            font-weight: normal;

          }
        }
        .old-price{
          margin-top: 4px;
          line-height: 1;
          text-decoration:line-through;
          color: #b1b1b1;
          font-size: 10px;
          span{

          }
        }

      }
      &-buy{
        border: 1px solid #ff6b11;
        border-radius: 15px;
        position: absolute;
        font-size: 13px;
        color: #ff6b11;
        padding: 4px 8px 5px;
        line-height: 1;
        top: 54px;
        right: 12px;
      }
      &-progress{
        position: relative;
        .progress-bar{
          width: calc(100% - 30px);
          margin-top: 16px;
          height: 4px;
          background-color: #e0e0e0;
          border-radius: 2px;
        }
        .progress-bar-active{
          position: absolute;
          top: 0;
          left: 0;
          height: 4px;
          background-color: #1bb2cd;
          width: calc(100% - 40px);
          border-radius: 2px;
        }
        .sald-progress{
          font-size: 11px;
          float: right;
          margin-top: -12px;
          color: #2a2a2a;
        }
      }

    }
    &-img{
      position: absolute;
      top: 4px;
      left: 12px;
      width: 115px;
      height: 115px;
    }
  }
</style>
