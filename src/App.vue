
<template>
  <div id="app">
    <Header></Header>
    <div class="public-container">
      <div class="left">
        <router-view></router-view>
      </div>
      <div class="right">
        <Constsider></Constsider>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/header'
  import Footer from './components/footer'
  import Constsider from './components/constsider.vue'

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
      Header,
      Footer,
      Constsider
    }
  }

</script>

<style>

  body{
    margin: 0;
    padding: 0;
    font-family: -apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif;
    font-size: 14px;
    line-height: 1.42858;
    color: #757575;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  .public-container {
    margin: 0 auto;
    width: 1000px;
    height: 100%;
  }
  .left {
    float: left;
    width: 750px;
    height:100%;
    overflow: hidden;
  }
  .right {
    float: left;
    width: 250px;
    height:100%;
    overflow: hidden;
  }
</style>
