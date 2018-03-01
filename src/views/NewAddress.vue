<template>
  <div class="content">
    <header-bar :title="title"></header-bar>
    <div class="content-body">
      <div>
        <div class="content-body-item">
          <div class="item-line"></div>
          收 件 人 :
          <input placeholder="请输入收件人姓名"/>
        </div>
        <div class="content-body-item">
          <!--<div class="item-line"></div>-->
          联系电话 :
          <input maxlength="11" type="tel" placeholder="请输入11位手机号"/>
        </div>
        <div class="content-body-item" @click="choiceArea">
          <!--<div class="item-line"></div>-->
          所在区域 :
          <div class="area-arrow"></div>
          <input placeholder="请选择所在区域" v-model="areaStr" disabled style="background-color: white"/>
          <!--<group style="background-color: green;z-index: 10000;margin-top: -50px;">-->
            <x-address style="margin-top: -50px;opacity: 0;background-color: green;height: 30px;position: absolute;width: 100%" on-hide="showAddress" v-model="choiceArress" :title="title" :list="value2"></x-address>
            <cell :value="getName(choiceArress)"></cell>
          <!--</group>-->

        </div>
        <div class="content-body-item">
          详细地址 :
          <input placeholder="请输入详细地址"/>
        </div>
      </div>
      <div class="content-body-sure">保存</div>
    </div>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar.vue'
  import {Group, XAddress, ChinaAddressV4Data, Cell, Value2nameFilter as value2name} from 'vux'
  export default {
    data () {
      return {
        title: '新建地址',
        value2: ChinaAddressV4Data,
        choiceArress: [],
        areaStr: ''
      }
    },
    components: {
      HeaderBar,
      XAddress,
      Group,
      Cell
    },
    methods: {
      addNewAddress () {
        console.log('新建收货地址')
      },
      editAddress () {
        console.log('edit')
      },
      deleteAddress () {
        console.log('delete')
      },
      choiceArea () {
        console.log('所在区域')
      },
      // 保存收货地址
      save () {
      },
      showAddress (val) {
        console.log(val)
      },
      getName (value) {
        this.areaStr = value2name(value, ChinaAddressV4Data)
        return value2name(value, ChinaAddressV4Data)
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  @import "../styles/themes";
  .content{
    &-body{
      margin-top: 64px;
      &-item{
        background-color: white;
        height: 46px;
        position: relative;
        line-height: 46px;
        padding-left: 12px;
        .item-line{
          position: absolute;
          z-index: 10;
          bottom: 0;
          height: 100%;
          width: 100%;
        }
        .item-line:after{
          .common-line-style;
          border-bottom: 1px solid @common-colour-e0;
        }
        input{
          position: absolute;
          border:none;
          z-index: 0;
          top:3px;
          height: 35px;
          padding-top: 3px;
          padding-left: 10px;
          color: @common-colour-2a;
          font-size: 15px;
          width: calc(100% - 30px);
        }
        .area-arrow{
          height: 46px;
          width: 15px;
          position: absolute;
          top: 0;
          right: 12px;
          background: url("../assets/icons/right-arrow_03.png") no-repeat right center;
          background-size: 7px 14px;
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
