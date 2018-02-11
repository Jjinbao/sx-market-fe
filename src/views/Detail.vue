<template>
  <div class="content" @click="back">
    商品详情
  </div>
</template>

<script>
  import { XButton } from 'vux'
  export default {
    components: {
      XButton
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
