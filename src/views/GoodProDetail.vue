<template>
  <div class="content">
    <header-bar :title="title"
                :showShare="true"></header-bar>
    <div class="content-body">
      <detail-swiper :bannerlist="bannerList"
                     :havesubtitle="true"
                     :heveflag="true"></detail-swiper>
      <div class="content-body-status">
        <div class="content-body-status-produce">
          产地：野三坡
          <div class="residue">剩余:<span>128</span></div>
        </div>
      </div>
      <div class="content-body-desc">
        产品详情
      </div>
    </div>
    <detail-bottom></detail-bottom>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar.vue'
  import DetailSwiper from '../components/DetailSwiper.vue'
  import DetailBottom from '../components/DetailBottom.vue'
  export default {
    data () {
      return {
        bannerList: [],
        title: '商品详情'
      }
    },
    created () {
      this.$nextTick(() => {
        this.getData(this.$route.params.id)
      })
    },
    methods: {
      getData (id) {
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
    },
    components: {
      HeaderBar,
      DetailSwiper,
      DetailBottom
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .content{
    &-body{
      margin-top: 64px;
      &-status{
        background-color: white;
        padding: 15px 15px 20px;
        &-produce{
          font-size: 13px;
          color: #5a5a5a;
          line-height: 1;
          .residue{
            float: right;
            span{
              font-size: 14px;
            }
          }
        }
      }
      &-desc{
        margin-top: 10px;
        background-color: white;
      }
    }
  }
</style>
