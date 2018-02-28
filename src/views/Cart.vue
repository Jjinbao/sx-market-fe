<template>
  <div class="content">
    <header-bar :title="title"
                :showDelete="true"
                :page-index="pageIndex"></header-bar>
    <div class="content-body">
      <div class="content-body-sort">
        <div class="content-body-sort-one" :class="{ 'content-body-sort-active': tabName === 'cash'}" @click="choiceCash">
          现金结算
        </div>
        <div class="content-body-sort-two" :class="{ 'content-body-sort-active': tabName === 'rsb'}" @click="choiceRsb">
          荣盛币结算
        </div>
      </div>
      <div class="content-body-list">
        <div class="content-body-list-sort">
          <div class="sort-title">
            优选
            <div class="sort-choice sort-choice-active"></div>
          </div>
          <cart-product></cart-product>
          <cart-product></cart-product>
        </div>
        <div class="content-body-list-sort">
          <div class="sort-title">
            秒杀
            <div class="sort-choice"></div>
          </div>
          <cart-product></cart-product>
        </div>
        <div class="content-body-list-sort">
          <div class="sort-title">
            拼团
            <div class="sort-choice"></div>
          </div>
          <cart-product></cart-product>
        </div>
      </div>
      <div class="content-body-footer">
        <div class="content-body-footer-line"></div>
        <div class="select-all select-all-active">全选</div>
        <div class="total-money">合计:<span class="money-flag">￥</span><span class="total-number">289</span></div>
        <div class="calculate-btn">结算</div>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar.vue'
  import CartProduct from '../components/CartProduct.vue'
  export default {
    data () {
      return {
        msg: 'Hello World!',
        title: '购物车',
        tabName: 'cash',  // 现金结算-cash   荣盛币结算-rsb
        pageIndex: 1
      }
    },
    components: {
      HeaderBar,
      CartProduct
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      choiceCash () {
        this.tabName = 'cash'
      },
      choiceRsb () {
        this.tabName = 'rsb'
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .content{
    padding-bottom: 97px;
    &-body{
      margin-top: 64px;
      padding-top: 15px;
      &-sort{
        width: 202px;
        height: 30px;
        line-height: 28px;
        box-sizing: border-box;
        margin: 0 auto;
        border-radius: 5px;
        border: 1px solid #1bb2cd;
        font-size: 0;
        &-one{
          width: 100px;
          display: inline-block;
          font-size: 15px;
          height: 29px;
          line-height: 28px;
          text-align: center;
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
          color: #1bb2cd;
        }
        &-two{
          width: 100px;
          display: inline-block;
          font-size: 15px;
          height: 29px;
          line-height: 28px;
          text-align: center;
          border-bottom-right-radius: 4px;
          border-top-right-radius: 4px;
          color: #1bb2cd;
        }
        &-active{
          background-color: #1bb2cd;
          color: white;
        }
      }
      &-list{
        margin-top: 15px;
        &-sort{
          margin-top: 10px;
          background-color: white;
          .sort-title{
            height: 44px;
            line-height: 44px;
            font-size: 15px;
            color: #2a2a2a;
            padding-left: 45px;
            position: relative;
            .sort-choice{
              width: 45px;
              height: 40px;
              position: absolute;
              top: 2px;
              left: 0;
              background: url(../assets/icons/cart-detault@2x.png) no-repeat 15px center;
              background-size: 20px 20px;
            }
            .sort-choice-active{
              background: url(../assets/icons/cart-select@2x.png) no-repeat 15px center;
              background-size: 20px 20px;
            }
          }
        }
      }
      &-footer{
        height: 45px;
        position: fixed;
        bottom: 53px;
        background-color: white;
        width: 100%;
        .select-all{
          width: 45px;
          height: 44px;
          position: absolute;
          top: 2px;
          left: 0;
          background: url(../assets/icons/cart-detault@2x.png) no-repeat 15px center;
          background-size: 20px 20px;
          line-height: 44px;
          padding-left: 45px;
          color: #2a2a2a;
          font-size: 14px;
        }
        .select-all-active{
          background: url(../assets/icons/cart-select@2x.png) no-repeat 15px center;
          background-size: 20px 20px;
        }
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
          border-top: 1px solid #d2d2d2;
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
        }
        .calculate-btn{
          width: 86px;
          height: 45px;
          line-height: 45px;
          background-color: #ff6b13;
          color: white;
          text-align: center;
          font-size: 16px;
          float: right;
        }
        .total-money{
          position: absolute;
          right: 106px;
          font-size: 12px;
          color: #b1b1b1;
          line-height: 45px;
          .money-flag{
            font-size: 15px;
            color: #ff6b12;
            margin-left: 10px;
          }
          .total-number{
            font-size: 22px;
            color: #ff6b12;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
