<template>
  <div class="content">
    <header-bar :title="title"></header-bar>
    <div class="content-body">
      <div class="content-body-address">
        <div class="decorate"></div>
        <div class="add-address" @click="addNewAddress"><div class="address-line"></div>新建收货地址</div>
        <!--<div class="receive-address">-->
          <!--<div class="address-name">王大虎</div>-->
          <!--<div class="address-phone">139****2564</div>-->
          <!--<div class="address-flag">默认</div>-->
          <!--<div class="detail-address">地址：北京市丰台区恒泰中心D座20层</div>-->
        <!--</div>-->
      </div>
      <div class="content-body-goods">
        <div class="content-body-goods-item">
          <div class="goods-name">商品<span class="span">芒果小麻薯x2</span></div>
          <div class="goods-price">售价<span class="span">￥253</span></div>
        </div>
      </div>
      <div class="content-body-goods">
        <div class="content-body-goods-item">
          <div class="goods-name">商品<span class="span">芒果小麻薯x2</span></div>
          <div class="goods-price">售价<span class="span">￥253</span></div>
        </div>
      </div>
      <div class="content-body-goods">
        <div class="content-body-goods-item">
          <div class="goods-name">总价<span class="total-money"><span class="flg">￥</span>280</span></div>
          <div class="goods-price">发票<div class="invoice">不需要发票</div></div>
          <div class="goods-remark">
            备注:<div class="line-bottom"></div>
            <textarea placeholder="请输入备注信息（45字以内）"></textarea>
          </div>
        </div>
      </div>
      <div class="content-body-sure">确认支付</div>
    </div>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar.vue'
  export default {
    data () {
      return {
        title: '订单'
      }
    },
    components: {
      HeaderBar
    },
    methods: {
      addNewAddress () {
        this.$router.push({
          name: 'Address'
        })
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  @import "../styles/themes";
  .content{
    &-body{
      margin-top: 64px;
      &-address{
        background-color: white;
        height: 78px;
        padding-top: 23px;
        position: relative;
        box-sizing: border-box;
        .add-address{
          height: 32px;
          line-height: 32px;
          width: 155px;
          text-align: center;
          margin: 0 auto;
          box-sizing: border-box;
          position: relative;
          color: @common-active-color;
          .address-line{}
          .address-line:after{
            .common-line-style;
            border: 1px solid @common-active-color;
            border-radius: 60px;
          }
        }
        .decorate{
          height: 2px;
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          background: url('../assets/icons/address-line@2x.png') no-repeat left center;
          background-size: 100% 2px;
        }
      }
      .receive-address{
        width: 100%;
        position: absolute;
        top: 0;
        padding-top: 13px;
        padding-left: 12px;
        font-size: 0;
        .address-name{
          display: inline-block;
          line-height: 18px;
          font-size: 15px;
          color: @common-colour-2a;
        }
        .address-phone{
          display: inline-block;
          line-height: 18px;
          margin-left: 16px;
          margin-right: 13px;
          font-size: 15px;
          color: @common-colour-2a;
        }
        .address-flag{
          display: inline-block;
          line-height: 18px;
          color: @common-active-color;
          font-size: 11px;
          height: 18px;
          width: 36px;
          line-height: 18px;
          position: relative;
          text-align: center;
          padding-left: 3px;
        }
        .address-flag:after{
          .common-line-style;
          border: 1px solid @common-active-color;
          border-radius: 10px;
        }
        .detail-address{
          line-height: 1.3;
          margin-top: 12px;
          font-size: 12px;
          color: @common-colour-2a;
        }
      }
      &-goods{
        margin-top: 10px;
        background-color: @common-colour-ff;
        &-item{
          padding-left: 12px;
          font-size: 15px;
          color: @common-colour-87;
          position: relative;

          .goods-name{
            line-height: 44px;
            padding-right: 15px;
            position: relative;
          }
          .goods-name:after{
            .common-line-style;
            border-bottom: 1px solid @common-colour-e0;
          }
          .goods-price{
            padding-right: 15px;
            line-height: 44px;
          }
          .span{
            float: right;
            font-size: 15px;
            color: @common-colour-2a;
          }
          .total-money{
            clear: both;
            float: right;
            font-size: 20px;
            color: @common-collor-orange;
            .flg{
              font-size: 15px;
            }
          }
          .invoice{
            clear: both;
            float: right;
            min-width: 50%;
            text-align: right;
            font-size: 14px;
            color: @common-colour-2a;
            background: url('../assets/icons/invoice@2x.png') no-repeat right center;
            background-size: 8px 17px;
            padding-right: 17px;
          }
          .goods-remark{
            position: relative;
            padding-top: 15px;
            height: 57px;
            line-height: 1;
            .line-bottom{
              position: absolute;
              width: 100%;
              top: 0;
            }
            .line-bottom:after{
              .common-line-style;
              border-top: 1px solid @common-colour-e0;
            }
            textarea{
              border: none;
              vertical-align: top;
              line-height: 1.5;
              width: calc(100% - 20px);
              padding-top: 3px;
              margin-top: -4px;
              resize: none;
              height: 50px;
            }
            textarea::-webkit-input-placeholder{
              color: @common-collor-d2;
              font-size: 14px;
            }
          }
        }
      }
      &-sure{
        width: 300px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 20px auto 0;
        background-color: @common-active-color;
        font-size: 17px;
        color: @common-colour-ff;
        border-radius: 40px;
      }
    }
  }
</style>
