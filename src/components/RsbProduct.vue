<template>
  <div class="rsb-product">
    <header-bar :title="title"></header-bar>
    <div class="rsb-product-list" @click="toDetail">
      <img src="https://sxtxappimg.4zlink.com/sxtx/picture/getPicture/5a7127df8c97d934b854a13e"/>
      <div class="rsb-intro">
        <div class="rsb-title">黄山特产手工茶叶礼盒小青柑</div>
        <div class="rsb-price">
          规格：2.5kg
          <div class="rsb-value"><span>888</span>荣盛币</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar.vue'

  export default {
    data () {
      return {
        msg: 'Hello World!',
        title: '荣盛币专区'
      }
    },
    components: {
      HeaderBar
    },
    methods: {
      toDetail () {
        this.$emit('toRsbDetail', '000000005fec1df5015fec7922ef0001')
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import '../styles/themes';
  .rsb-product{
    background-color: white;
    &-list{
      img{
        width: 100%;
        vertical-align: top;
        @media screen and(min-width: 310px) and (max-width: 360px){
          height: 190px;
        }
        @media screen and (min-width: 361px) and (max-width:400px){
          height: 200px;
        }
        @media screen and(min-width: 401px) and (max-width:767px){
          height: 220px;
        }
      }
      .rsb-intro{
        padding: 15px 0px 18px 12px;
        .rsb-title{
          font-size: 17px;
          color: #2a2a2a;
          line-height: 1;
        }
        .rsb-price{
          font-size: 12px;
          color: #878787;
          line-height: 1;
          margin-top: 15px;
          .rsb-value{
            float: right;
            margin-right: 12px;
            color: #5a5a5a;
            span{
              font-size: 18px;
              color: @common-collor-orange;
              margin-right: 3px;
              line-height: 1;
            }
          }
        }
      }
    }
  }
</style>
