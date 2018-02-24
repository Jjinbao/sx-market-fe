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
        title: '盛行优选'
      }
    },
    components: {
      HeaderBar
    },
    methods: {
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
