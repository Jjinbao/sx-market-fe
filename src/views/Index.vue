<template>
  <div class="content">
    <header-bar :title="title" :page-index="pageIndex"></header-bar>
    <div class="content-body">
      <swiper :list="bannerList"
              :loop="true"
              :aspect-ratio="420/600"
              dots-position="center"></swiper>
      <div class="content-body-tab">
        <div class="content-body-tab-left" @click="toGroupList">
          拼团专区
        </div>
        <div class="content-body-tab-right" @click="toRsbList">
          <div class="right-content">
            荣盛币专区
          </div>
        </div>
      </div>
      <div class="content-body-classics" @click="toGoodList">

      </div>
      <div class="content-body-seckill">
        <div class="seckill-tab">
          <div class="sekill-header">
            今日秒杀
          </div>
          <div class="seckill-time">
            <div class="time-block" @click="choiceTime">
              <div class="common-color time-stop">14:00</div>
              <div class="common-color stop-status">已结束</div>
            </div>
            <div class="time-block">
              <div class="common-color time-secing">16:00</div>
              <div class="common-color secing-status">进行中</div>
            </div>
            <div class="time-block">
              <div class="common-color time-waiting">18:00</div>
              <div class="common-color waiting-status">未开始</div>
            </div>
            <div class="time-block">
              <div class="common-color time-waiting">20:00</div>
              <div class="common-color waiting-status">未开始</div>
            </div>
          </div>
        </div>
        <div class="residue-time">
          <div class="stop-name">距结束</div><div class="count-down">02</div><div class="time-point">:</div><div class="count-down">02</div><div class="time-point">:</div><div class="count-down">02</div>
        </div>
        <div class="seckill-product">
          <product-index v-on:seckillDetail="toSeckillDetail"></product-index>
        </div>
      </div>
      <div class="content-body-group">
        <div class="group-tab">
          <div class="group-header">
            拼团推荐
            <div class="more-group" @click="toGroupList">
              更多拼团
            </div>
          </div>
        </div>
        <div class="group-product">
          <product-index></product-index>
        </div>
      </div>
      <div class="content-body-story">
        <div class="story-header">
          <div class="story-header-title">
            优品故事
            <div class="more-story" @click="moreStory">
              更多故事
            </div>
          </div>
        </div>
        <div class="story-content">
          <img src="../assets/timg.jpg"/>
          <div class="story-title">
            秦皇岛特产葡萄酒光照充足色泽好
          </div>
          <div class="story-body">
            产品介绍：每年下半年，玛格丽特二世女王陛下、亨利克亲王殿下都会同其他欧洲王室成员来到这个位于法国南部的美丽庄园度假，体验并感受普通人的悠闲生活。亨利克亲王十分喜爱葡萄酒，他在买下Chateau de Cayx城堡后便开始在城堡周围开垦土地，种植并酿造葡萄酒。
          </div>
          <div class="rec-pro">
            <div class="left-point"></div>
            黄山特产脆酥烧饼
          </div>
        </div>
      </div>

      <div class="content-body-nice">
        <div class="nice-header">
          <div class="nice-header-title">
            盛行优品
          </div>
        </div>
        <div class="nice-content">
          <product></product>
          <product style="margin-top: 1px"></product>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar.vue'
  import ProductIndex from '../components/ProductIndex.vue'
  import Product from '../components/Product.vue'
  import { Swiper, Scroller } from 'vux'
  export default {
    data () {
      return {
        title: '商城',
        pageIndex: 1,
        bannerList: []
      }
    },
    components: {
      HeaderBar,
      Swiper,
      Scroller,
      ProductIndex,
      Product
    },
    created () {
      this.$http({
        method: 'POST',
        url: 'https://sxtxtest.4zlink.com:9092/sxtx/mobile/index/list',
        data: {params: {}, phone_size: 1}
      }).then((data) => {
        console.log(data)
        data.data.data.forEach((item) => {
          let oneItem = {
            img: item.pic,
            activeUrl: item.activityPath
          }
          this.bannerList.push(oneItem)
        })
      })
    },
    methods: {
      toNextPage () {
        this.$router.push({name: 'detail'})
      },
      // 去拼团专区列表
      toGroupList () {
        this.$router.push({name: 'grouplist'})
      },
      // 去荣盛币专区
      toRsbList () {
        this.$router.push({name: 'rsbList'})
      },
      // 去优选列表
      toGoodList () {
        this.$router.push({name: 'goodList'})
      },
      // 选择一个秒杀时间
      choiceTime () {
        console.log('choick a time')
      },
      // 更多故事
      moreStory () {
        this.$router.push({name: 'find'})
      },
      // 去秒杀详情
      toSeckillDetail (id) {
        this.$router.push({
          name: 'seckillDetail',
          params: {id: id}
        })
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .content{
    padding-bottom: 53px;
    &-body{
      position: relative;
      padding-top: 64px;
      &-tab{
        height: 56px;
        width: 100%;
        font-size: 0;
        color: #2b2b2b;
        background-color: white;
        &-left{
          width: 50%;
          height: 56px;
          display: inline-block;
          font-size: 16px;
          text-align: center;
          line-height: 56px;
          vertical-align: top;
          box-sizing: border-box;
        }
        &-right{
          width: 50%;
          height: 56px;
          display: inline-block;
          font-size: 16px;
          text-align: center;
          vertical-align: top;
          box-sizing: border-box;
          .right-content{
            height: 24px;
            margin-top: 16px;
            width: 99%;
            position: relative;
          }
          .right-content:after{
            width: 200%;
            height: 200%;
            position: absolute;
            top: -50%;
            left: -50%;
            content: "";
            border-left: 1px solid #dfdfdf;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
          }
        }
      }
      &-classics{
        background-color: white;
        height: 103px;
        margin-top: 10px;
        .box1 {
          height: 100px;
          position: relative;
          width: 100%;
        }
        .box1-item {
          width: 200px;
          height: 100px;
          background-color: #ccc;
          display:inline-block;
          margin-left: 15px;
          float: left;
          text-align: center;
          line-height: 100px;
        }
        .box1-item:first-child {
          margin-left: 0;
        }
      }
      &-seckill{
        margin-top: 10px;
        background-color: white;
        .seckill-tab{
          height: 97px;
          padding-top: 18px;
          box-sizing: border-box;
          .sekill-header{
            font-size: 15px;
            color: #2a2a2a;
            background: url('../assets/icons/recore-icon-logo@2x.png') no-repeat left center;
            background-size: 2px 15px;
            line-height: 1;
            padding-left: 9px;
            margin-left: 12px;
          }
          .seckill-time{
            position: relative;
            margin-top: 19px;
            font-size: 13px;
            font-weight: bold;
            line-height: 1;
            .time-block{
              width: 25%;
              text-align: center;
              float: left;
              font-size: 15px;
              .common-color{
                line-height: 1;
              }
              .time-stop{
                color: #b1b1b1;
              }
              .stop-status{
                font-size: 10px;
                color: #b1b1b1;
                margin-top: 7px;

              }
              .time-secing{
                color: #ff6913;
              }
              .secing-status{
                font-size: 10px;
                margin-top: 7px;
                color: #ff6913;
              }
              .time-waiting{
                color: #2a2a2a;
              }
              .waiting-status{
                font-size: 10px;
                margin-top: 7px;
                color: #2a2a2a;
              }
            }
          }
        }
        .residue-time{
          height: 54px;
          position: relative;
          box-sizing: border-box;
          padding-top: 15px;
          padding-left: 12px;
          .stop-name{
            display: inline-block;
            height: 21px;
            line-height: 21px;
            font-size: 13px;
            margin-right: 12px;
          }
          .time-point{
            width: 11px;
            text-align: center;
            display: inline-block;
            color: #212121;
            height: 21px;
            line-height: 21px;
          }
          .count-down{
            display: inline-block;
            width: 21px;
            height: 21px;
            background-color: #4a4a4a;
            border-radius: 3px;
            font-size: 12px;
            text-align: center;
            line-height: 21px;
            color: white;
          }
        }
        .residue-time:after{
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
        .seckill-product{
          padding-bottom: 21px;
        }
      }
      &-group{
        margin-top: 10px;
        background-color: white;
        .group-tab{
          padding-top: 18px;
          height: 60px;
          box-sizing: border-box;
          .group-header{
            position: relative;
            font-size: 16px;
            color: #2a2a2a;
            background: url('../assets/icons/recore-icon-logo@2x.png') no-repeat left center;
            background-size: 2px 15px;
            line-height: 1;
            padding-left: 9px;
            margin-left: 12px;
            .more-group{
              position: absolute;
              right: 12px;
              top: -1px;
              background: url('../assets/icons/right-arrow_03.png') no-repeat right center;
              background-size: 7px 14px;
              font-size: 12px;
              color: #999;
              padding-right: 10px;
              line-height: 1;
            }

          }
        }
        .group-product{
          padding-bottom: 21px;
        }
      }
      &-story{
        background-color: white;
        margin-top: 10px;
        .story-header{
          height: 54px;
          box-sizing: border-box;
          padding-top: 19px;
          .story-header-title{
            position: relative;
            font-size: 16px;
            color: #2a2a2a;
            background: url('../assets/icons/recore-icon-logo@2x.png') no-repeat left center;
            background-size: 2px 15px;
            line-height: 1;
            padding-left: 9px;
            margin-left: 12px;
            .more-story{
              position: absolute;
              right: 12px;
              top: -1px;
              background: url('../assets/icons/right-arrow_03.png') no-repeat right center;
              background-size: 7px 14px;
              font-size: 12px;
              color: #999;
              padding-right: 10px;
              line-height: 1;
            }
          }
        }
        .story-content{
          padding: 0 10px 0px;
          img{
            width: 100%;
            vertical-align: top;
          }
          .story-title{
            margin-top: 16px;
            font-size: 18px;
            color: #2a2a2a;
            line-height: 1;
          }
          .story-body{
            margin-top: 14px;
            font-size: 14px;
            color: #5a5a5a;
            line-height: 1.7;
            padding-bottom: 2px;
          }
          .rec-pro{
            color: #1bb2cd;
            font-size: 12px;
            height: 49px;
            line-height: 49px;
            padding-left: 12px;
            position: relative;
            .left-point{
              position: absolute;
              left: 0;
              width: 4px;
              height: 4px;
              background-color: #1bb2cd;
              border-radius: 4px;
              margin-top: 23px;
            }
          }
        }
      }
      &-nice{
        background-color: white;
        margin-top: 10px;
        .nice-header{
          height: 40px;
          box-sizing: border-box;
          padding-top: 19px;
          .nice-header-title{
            position: relative;
            font-size: 16px;
            color: #2a2a2a;
            background: url('../assets/icons/recore-icon-logo@2x.png') no-repeat left center;
            background-size: 2px 15px;
            line-height: 1;
            padding-left: 9px;
            margin-left: 12px;
            .more-nice{
              position: absolute;
              right: 12px;
              top: -1px;
              background: url('../assets/icons/right-arrow_03.png') no-repeat right center;
              background-size: 7px 14px;
              font-size: 12px;
              color: #999;
              padding-right: 10px;
              line-height: 1;
            }
          }
        }
        .nice-content{

        }
      }
    }

  }
</style>

