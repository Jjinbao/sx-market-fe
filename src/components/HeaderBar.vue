<template>
  <div class="header">
    <div class="header-title">
      {{title}}
    </div>
    <div class="header-back" @click="back">
    </div>
    <div class="header-share" v-show="showShare"></div>
  </div>
</template>

<script>
  export default {
    name: 'headerBar',
    props: ['title', 'pageIndex', 'showShare'],
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      back () {
        if (this.pageIndex === 1) {
          console.log(123)
        } else {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .header{
    height: 64px;
    box-sizing: border-box;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    &-title{
      height: 100%;
      width: 100%;
      height: 44px;
      margin-top: 20px;
      line-height: 44px;
      position: relative;
      box-sizing: border-box;
      font-size: 16px;
      text-align: center;
    }
    &-title:after{
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
    &-back{
      width: 23px;
      height: 44px;
      background: url("../assets/icons/back-arrow@2x.png") no-repeat 12px 12px;
      background-size: 11px 20px;
      padding-left: 12px;
      position: absolute;
      bottom: 0;
    }
    &-share{
      width: 17px;
      height: 44px;
      background: url("../assets/icons/share-title@2x.png") no-repeat left center;
      background-size: 17px 22px;
      position: absolute;
      right: 15px;
      bottom: 0;
    }
  }
</style>
