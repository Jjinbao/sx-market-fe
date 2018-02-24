<template>
  <div class="content">
    <header-bar :title="title"></header-bar>
    <div class="content-body">
      <product style="margin-top: 1px;"></product>
      <product style="margin-top: 1px;"></product>
      <product style="margin-top: 1px;"></product>
      <product style="margin-top: 1px;"></product>
      <product style="margin-top: 1px;"></product>
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
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .content{
    &-body {
      position: relative;
      padding-top: 64px;
    }
  }
</style>
