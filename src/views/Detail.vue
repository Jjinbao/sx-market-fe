<template>
  <div class="content">
    <header-bar></header-bar>
  </div>
</template>

<script>
  import { XButton } from 'vux'
  import HeaderBar from '../components/HeaderBar.vue'
  export default {
    components: {
      XButton,
      HeaderBar
    },
    data () {
      return {
        msg: 'Hello World!'
      }
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
