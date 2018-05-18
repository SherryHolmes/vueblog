<template>
  <div>
    <div class="layout">
      <div class="flex-direction-colum">
        <my-header></my-header>
        <Row type="flex" justify="center">
          <Col :xs="0" :sm="6" :md="6" :lg="4" >
          <Sider hide-trigger :style="{background: '#fff' }">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  Item 1
                </template>
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
                <MenuItem name="1-3">Option 3</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  Item 2
                </template>
                <MenuItem name="2-1">Option 1</MenuItem>
                <MenuItem name="2-2">Option 2</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  Item 3
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
              </Submenu>
            </Menu>
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

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      myHeader,
      myFooter,
      Constsider
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
