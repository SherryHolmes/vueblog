<template>
  <div>
    <div class="layout">
      <div class="flex-direction-colum">
        <my-header></my-header>
        <Row type="flex" justify="center">
          <Col :xs="0" :sm="6" :md="6" :lg="4" >
          <Sider hide-trigger :style="{background: '#fff' }">
            <my-menu></my-menu>
          </Sider>
          </Col>
          <Col :xs="24" :sm="18" :md="18" :lg="13" >
          <div style="padding: 2%; ">
            <div style=" flex: auto;  padding: 2%; min-height: 100%; background: rgb(255, 255, 255);">
              <router-view></router-view>
            </div>
          </div>
          </Col>
          <Col :xs="0" :sm="0" :md="0" :lg="5" >
          <div style="width: 100%; display: flex; justify-content: center;">
            <div style="min-width: 250px; max-width: 250px; flex: 0 0 250px; ">
              <Constsider></Constsider>
            </div>
          </div>
          </Col>
        </Row>
      </div>
      <div class="flex-direction-colum">
        <div class="my-ivu-layout-footer">
          <my-footer></my-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import myHeader from './components/header'
  import myFooter from './components/footer'
  import Constsider from './components/constsider.vue'
  import myMenu from './components/menusider.vue'
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      myHeader,
      myFooter,
      Constsider,
      myMenu
    }
  }

</script>

<style>

  .flex-direction-colum {
    display: flex;
    flex-direction: column;
    flex: auto;
  }

  .flex-direction-row {
    display: flex;
    flex-direction: row;
    flex: auto;
  }

  .layout {
    border: 0px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  body {
    font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
    color: #757575;
  }

  .my-ivu-layout-footer {
    background: #f5f7f9;
    padding: 24px 50px;
    color: #495060;
    font-size: 14px;
  }

</style>
