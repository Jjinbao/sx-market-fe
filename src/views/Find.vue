<template>
  <div class="content">
    <header-bar :title="title" :page-index="pageIndex"></header-bar>
    <div class="content-body">
      <div class="content-body-story">
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
      <div class="content-body-story">
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
    </div>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar.vue'
  export default {
    data () {
      return {
        msg: 'Hello World!',
        title: '发现',
        pageIndex: 1
      }
    },
    components: {
      HeaderBar
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      toDetail () {
        this.$router.push({name: 'detail'})
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../styles/themes";
  .content{
    padding-bottom: 53px;
    &-body{
      margin-top: 64px;
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
            color: @common-active-color;
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
              background-color: @common-active-color;
              border-radius: 4px;
              margin-top: 23px;
            }
          }
        }
      }
    }
  }
</style>
