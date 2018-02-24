<template>
  <div class="content">
    <header-bar :title="title"></header-bar>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar.vue'
  export default {
    data () {
      return {
        msg: 'Hello World!',
        title: '购物车'
      }
    },
    components: {
      HeaderBar
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .content{
    text-align: center;
    h1{
      color: red;
    }
  }
</style>
