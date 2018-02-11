<template>
  <div class="content">
    <h1 @click="toNextPage">{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    created () {
      this.$http({
        method: 'POST',
        url: 'https://sxtxtest.4zlink.com:9092/sxtx/mobile/index/hotKey',
        data: {params: {}}
      }).then((data) => {
        console.log(data)
      })
    },
    methods: {
      toNextPage () {
        this.$router.push({name: 'detail'})
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

