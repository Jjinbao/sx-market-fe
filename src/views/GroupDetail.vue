<template>
  <div class="content">
    <div class="content-back" @click="back"></div>
    <div class="content-share" @click="share"></div>
    <detail-swiper :bannerlist="bannerList"></detail-swiper>
    <div class="content-detail">
      <div class="content-detail-status">
        <div class="info">
          剩余<span>5</span>天
          <div class="have-sold">已售85%</div>
        </div>
        <div class="progress">
          <div class="progress-bar"></div>
          <div class="progress-active"></div>
        </div>
      </div>
      <div class="content-detail-introduce">
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情</div>
        <div>产品详情123</div>
      </div>
    </div>
    <detail-bottom></detail-bottom>
  </div>
</template>

<script>
  import DetailSwiper from '../components/DetailSwiper.vue'
  import DetailBottom from '../components/DetailBottom.vue'
  export default {
    data () {
      return {
        title: '拼团详情',
        bannerList: []
      }
    },
    created () {
      this.$nextTick(() => {
        this.getDetail(this.$route.params.id)
      })
    },
    components: {
      DetailSwiper,
      DetailBottom
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      share () {
        console.log(123)
      },
      getDetail (id) {
        this.$http({
          method: 'POST',
          url: 'https://sxtxtest.4zlink.com:9092/sxtx/mobile/productTravel/productInfo',
          data: {params: {productId: id, userId: ''}, phone_size: 1}
        }).then((res) => {
          console.log(res.data.data)
          res.data.data.details.forEach((img) => {
            this.bannerList.push({
              img: img
            })
          })
          console.log(this.bannerList)
        })
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .content{
    position: relative;
    &-back{
      width: 47px;
      height: 59px;
      position: absolute;
      top: 0;
      left: 0;
      background: url('../assets/icons/back@2x.png') no-repeat right bottom;
      background-size: 32px 32px;
      z-index: 1000;
    }
    &-share{
      width: 47px;
      height: 59px;
      position: absolute;
      top: 0;
      right: 0;
      background: url('../assets/icons/share@2x.png') no-repeat left bottom;
      background-size: 32px 32px;
      z-index: 1000;
    }
    &-detail{
      padding-bottom: 49px;
      &-status{
        padding: 25px 15px;
        background-color: white;
        .info{
          font-size: 12px;
          color: #878787;
          line-height: 1;
          span{
            font-size: 15px;
            color: #2a2a2a;
          }
          .have-sold{
            float: right;
            font-size: 13px;
            color: #2a2a2a;
          }
        }
        .progress{
          padding-top: 12px;
          position: relative;
          .progress-bar{
            height: 4px;
            width: 100%;
            background-color: #e0e0e0;
            border-radius: 2px;
          }
          .progress-active{
            position: absolute;
            top: 12px;
            width: 85%;
            height: 4px;
            background-color: #1bb2cd;
            border-radius: 2px;

          }
        }
      }
      &-introduce{
        background-color: white;
        margin-top: 10px;
      }
    }
  }
</style>
