<template>
  <div class="content">
    <header-bar :title="title"></header-bar>
    <div class="content-body">
      <div class="content-body-address">
        <div class="address-body">
          <div class="address-body-name">
            向三<span>150****2356</span>
          </div>
          <div class="address-body-detail">
            北京市丰台区丰台北路恒泰中心写字楼D座20层
          </div>
        </div>
        <div class="address-footer">
          <div class="address-default address-default-active"></div>
          <div class="address-edit edit" @click="editAddress"><div class="border-line"></div>编辑</div>
          <div class="address-edit delete" @click="deleteAddress"><div class="border-line"></div>删除</div>
        </div>
      </div>
      <div class="content-body-address">
        <div class="address-body">
          <div class="address-body-name">
            向三<span>150****2356</span>
          </div>
          <div class="address-body-detail">
            北京市丰台区丰台北路恒泰中心写字楼D座20层
          </div>
        </div>
        <div class="address-footer">
          <div class="address-default"></div>
          <div class="address-edit edit" @click="editAddress"><div class="border-line"></div>编辑</div>
          <div class="address-edit delete" @click="deleteAddress"><div class="border-line"></div>删除</div>
        </div>
      </div>
      <div class="content-body-address">
        <div class="address-body">
          <div class="address-body-name">
            向三<span>150****2356</span>
          </div>
          <div class="address-body-detail">
            北京市丰台区丰台北路恒泰中心写字楼D座20层
          </div>
        </div>
        <div class="address-footer">
          <div class="address-default"></div>
          <div class="address-edit edit" @click="editAddress"><div class="border-line"></div>编辑</div>
          <div class="address-edit delete" @click="deleteAddress"><div class="border-line"></div>删除</div>
        </div>
      </div>
    </div>
    <div class="content-footer" @click="addAddress">
      新增地址
    </div>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar.vue'
  export default {
    data () {
      return {
        title: '收货地址'
      }
    },
    components: {
      HeaderBar
    },
    methods: {
      addNewAddress () {
        console.log('新建收货地址')
      },
      editAddress () {
        this.$router.push({
          name: 'editAddress'
        })
      },
      deleteAddress () {
        console.log('delete')
      },
      // 新建地址
      addAddress () {
        this.$router.push({
          name: 'newAddress'
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
      padding-bottom: 49px;
      &-address{
        position: relative;
        background-color: white;
        margin-bottom: 10px;
        .address-body{
          padding-top: 15px;
          position: relative;
          padding-left: 12px;
          padding-bottom: 15px;
          .address-body-name{
            line-height: 1;
            font-size: 15px;
            color: @common-colour-2a;
            padding-right: 15px;
            span{
              float: right;
            }
          }
          .address-body-detail{
            line-height: 1;
            font-size: 12px;
            color: @common-colour-2a;
            margin-top: 12px;
          }
        }
        .address-body:after{
          .common-line-style;
          border-bottom: 1px solid @common-colour-e0;
        }
        .address-footer{
          height: 41px;
          .address-default{
            width: 44px;
            height: 41px;
            background: url('../assets/icons/cart-detault@2x.png') no-repeat center;
            background-size: 20px;
          }
          .address-default-active{
            background: url('../assets/icons/cart-select@2x.png') no-repeat center;
            background-size: 20px;
          }
          .address-edit{
            float: right;
            width: 70px;
            height: 27px;
            line-height: 29px;
            text-align: center;
            position: relative;
            margin-top: -34px;
            font-size: 14px;
            color: @common-colour-5a;
            .border-line{
              position: absolute;
              width: 70px;
              height: 27px;
            }
            .border-line:after{
              .common-line-style;
              border: 1px solid @common-colour-b1;
              border-radius: 6px;
            }
          }
          .edit{
            margin-right: 112px;
          }
          .delete{
            margin-right: 12px;
          }
        }
      }
    }
    &-footer{
      height: 49px;
      background-color: @common-active-color;
      width: 100%;
      position: fixed;
      bottom: 0;
      line-height: 49px;
      text-align: center;
      color: white;
      font-size: 17px;
    }
  }
</style>
