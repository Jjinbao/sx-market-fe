<template>
  <div class="content">
    <header-bar :title="title"></header-bar>
    <div class="content-list">
      <rsb-product class="content-list-product" v-on:toRsbDetail="toRsbDetail"></rsb-product>
      <rsb-product class="content-list-product"></rsb-product>
      <rsb-product class="content-list-product"></rsb-product>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar.vue'
  import RsbProduct from '../components/RsbProduct.vue'
  export default {
    data () {
      return {
        msg: 'Hello World!',
        title: '荣盛币专区'
      }
    },
    components: {
      HeaderBar,
      RsbProduct
    },
    methods: {
      toRsbDetail (id) {
        this.$router.push({
          name: 'rsbDetail',
          params: {id: id}
        })
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .content{
    &-list{
      margin-top: 64px;
      &-product{
        margin-top: 10px;
      }
    }
  }
</style>
