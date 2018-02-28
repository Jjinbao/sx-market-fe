<template>
  <div class="detail">
    <div class="detail-swiper">
      <swiper :list="bannerlist"
              :auto="true"
              :loop="true"
              :height="bannerHeight"
              :show-dots="false"
              @on-index-change="showImgNum"
              dots-position="center"></swiper>
      <div class="detail-swiper-index">
        {{imgIndex}}/{{this.bannerlist.length}}
      </div>
    </div>
    <div class="detail-flag" v-show="heveflag">
      <img src="../assets/icons/flag-yy@2x.png"/>
    </div>
    <div class="detail-desc">
      <div class="detail-desc-title">
        黄山特产手工礼盒特产茶叶
      </div>
      <div class="detail-desc-subtitle" v-show="havesubtitle">
        副标题这个是副标题
      </div>
      <div class="detail-desc-price">
        <span class="rmb-1">￥</span><span class="rmb-price">60</span><span class="old-price"><span class="rmb-2">￥</span><span class="rmb-old">65</span></span>
        <div class="weight">25kg</div>
        <div class="buy-number">
          <img class="buy-minus" src="../assets/icons/minus@2x.png"/>
          <img v-show="buyNumber > 1" @click="minusNumber" class="buy-minus" src="../assets/icons/minus-active@2x.png"/>
          {{buyNumber}}
          <img class="buy-plus" @click="addNumber" src="../assets/icons/plus@2x.png"/>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import { Swiper } from 'vux'
  export default {
    props: {
      bannerlist: {
        type: Array,
        detault: []
      },
      havesubtitle: {
        type: Boolean,
        default: false
      },
      heveflag: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        bannerHeight: '250px',
        imgIndex: 1,
        buyNumber: 1
      }
    },
    created () {
      let tempWidth = document.body.clientWidth
      if (tempWidth === 375) {
        this.bannerHeight = '250px'
      }
    },
    components: {
      Swiper
    },
    methods: {
      showImgNum (index) {
        this.imgIndex = index + 1
      },
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
  .detail{
    position: relative;
    background-color: white;
    &-swiper{
      position: relative;
      &-index{
        width: 40px;
        height: 20px;
        background: rgba(0,0,0,0.3);
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 12px;
        color: #ffffff;
        line-height: 20px;
        text-align: center;
      }
    }
    &-flag{
      position: absolute;
      top: 3px;
      left: 3px;
      img{
        vertical-align: top;
        width: 27px;
        height: 33px;
      }
    }
    &-desc{
      &-title{
        font-size: 15px;
        color: #2a2a2a;
        line-height: 1;
        padding-left: 15px;
        padding-top: 15px;
        padding-bottom:9px;
      }
      &-subtitle{
        font-size: 12px;
        color: #878787;
        line-height: 1;
        padding-top: 5px;
        padding-left: 15px;
      }
      &-price{
        padding-top: 18px;
        padding-bottom: 10px;
        padding-left: 15px;
        line-height: 1;
        position: relative;
        .rmb-1{
          font-size: 15px;
          color: #ff6b12;
        }
        .rmb-price{
          font-size: 23px;
          color: #ff6b12;
        }
        .old-price{
          text-decoration:line-through;
          color: #b1b1b1;
          margin-left: 4px;
          .rmb-2{
            font-size: 11px;

          }
          .rmb-old{
            font-size: 12px;
          }
        }
        .weight{
          width: 100%;
          position: absolute;
          top: 23px;
          left: 0;
          text-align: center;
          font-size: 13px;
          color: #878787;
        }
        .buy-number{
          position: absolute;
          top: 18px;
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
  }
</style>
