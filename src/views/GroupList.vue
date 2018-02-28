<template>
  <div class="content">
    <header-bar :title="title"></header-bar>
    <div class="content-body">
      <product class="content-body-prodect"
               v-on:toDetail="toDetail"
               :isplace="false"></product>
      <product class="content-body-prodect"
               v-on:toDetail="toDetail"
               :isplace="false"></product>
      <product class="content-body-prodect"
               v-on:toDetail="toDetail"
               :isplace="false"></product>
      <product class="content-body-prodect"
               v-on:toDetail="toDetail"
               :isplace="false"></product>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar.vue'
  import Product from '../components/Product.vue'
  export default {
    data () {
      return {
        msg: 'Hello World!',
        title: '拼团'
      }
    },
    components: {
      HeaderBar,
      Product
    },
    methods: {
      toDetail (val) {
        this.$router.push({
          name: 'groupDetail',
          params: {id: '000000005fec1df5015fec7922ef0001'}
        })
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .content{
    &-body {
      position: relative;
      padding-top: 64px;
      &-prodect{
        margin-top: 1px;
      }
    }
  }
</style>
