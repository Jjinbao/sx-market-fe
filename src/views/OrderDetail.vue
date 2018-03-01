<template>
  <div class="content">
    <header-bar :title="title"></header-bar>
    <div class="content-body">
      <div class="content-body-title">
        订单编号：ORDTH123644741852
        <div class="content-body-title-status">
        待付款
        </div>
      </div>
      <div class="content-body-info">
        <div class="detail-item">
          商品:<span class="pro-name">芒果小酪x2</span>
        </div>
        <div class="detail-item">
          总计:<span class="total-money"><span class="flag">￥</span><span class="money">623</span></span>
        </div>
        <div class="detail-item">
          下单时间:<span class="pro-name">2018-02-28 19:09:45</span>
        </div>
        <div class="detail-item-last">
          支付方式:<span class="pro-name">荣盛币支付</span>
        </div>
      </div>
      <div class="content-body-info">
        <div class="detail-item">
          联系人:<span class="pro-name">张三</span>
        </div>
        <div class="detail-item">
          联系电话:<span class="pro-name">18210596067</span>
        </div>
        <div class="detail-item-last">
          收货地址:<span class="pro-name">北京市丰台区恒泰中心D座20层四众互联</span>
        </div>
      </div>
      <div class="content-body-logistics">
        <div class="logistics-name">
          物流信息：顺丰快递
        </div>
        <div class="logistics-status">
          仓库出库
        </div>
      </div>
      <div class="content-body-rec">
        <product-rec style="margin-top: 1px;"></product-rec>
        <product-rec style="margin-top: 1px;"></product-rec>
        <product-rec style="margin-top: 1px;"></product-rec>
        <product-rec style="margin-top: 1px;"></product-rec>
      </div>
    </div>
    <order-detail-bottom></order-detail-bottom>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar.vue'
  import ProductRec from '../components/ProductRec.vue'
  import OrderDetailBottom from '../components/OrderDetailBottom.vue'
  export default {
    data () {
      return {
        title: '订单详情'
      }
    },
    components: {
      HeaderBar,
      ProductRec,
      OrderDetailBottom
    },
    methods: {
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  @import "../styles/themes";
  .content{
    padding-bottom: 49px;
    &-body{
      margin-top: 64px;
      &-title{
        background-color: white;
        height: 40px;
        position: relative;
        font-size: 12px;
        color: #878787;
        line-height: 40px;
        padding: 0 12px;
        &-status{
          float: right;
          font-size: 15px;
          color: @common-active-color;
        }
      }
      &-info{
        margin-top: 10px;
        padding-left: 12px;
        background-color: white;
        .detail-item{
          height: 44px;
          position: relative;
          font-size: 15px;
          color: #878787;
          line-height: 44px;
          padding-right: 15px;
          clear: both;
          .pro-name{
            color: #5a5a5a;
            float: right;
          }
          .total-money{
            color: #ff6b12;
            float: right;
            .flag{
              font-size: 12px;
            }
            .money{
              font-size: 15px;
            }
          }
        }
        .detail-item-last{
          height: 44px;
          position: relative;
          font-size: 15px;
          color: #878787;
          line-height: 44px;
          padding-right: 15px;
          clear: both;
          .pro-name{
            color: #5a5a5a;
            float: right;
          }
        }
        .detail-item:after{
          width: 200%;
          height: 200%;
          position: absolute;
          top: -50%;
          left: -50%;
          content: "";
          border-bottom: 1px solid #e0e0e0;
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
        }
      }
      &-logistics{
        margin-top: 10px;
        padding-top: 15px;
        background-color: white;
        color: #5a5a5a;
        padding-left: 12px;
        padding-bottom: 15px;
        .logistics-name{
          line-height: 1;
          font-size: 15px;
        }
        .logistics-status{
          font-size: 13px;
          line-height: 1;
          margin-top: 15px;
        }
      }
      &-rec{
        margin-top: 10px;
        background-color: white;
      }
    }
    &-footer{
      height: 49px;
      background-color: white;
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
      &-line{
        position: relative;
      }
      &-line:after{
        width: 200%;
        height: 200%;
        position: absolute;
        top: -50%;
        left: -50%;
        content: "";
        border-top: 1px solid #e0e0e0;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
      }
    }
  }
</style>
