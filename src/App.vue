<template>
  <div>
    <div class="layout">
      <div class="flex-direction-colum">
        <my-header></my-header>
        <div class="flex-direction-row">
          <Sider hide-trigger :style="{background: '#fff'}">
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

          <div class="flex-direction-colum" style="padding: 24px 24px 0 24px;">
            <div style=" flex: auto;  padding: 24px; min-height: 100%; background: rgb(255, 255, 255);">
              <router-view></router-view>
            </div>
          </div>
          <div style="min-width: 250px; max-width: 250px; flex: 0 0 250px; background: #fff;">
            <Constsider></Constsider>
          </div>
        </div>
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

  .flex-direction-colum{
    display: flex;
    flex-direction: column;
    flex: auto;
  }
  .flex-direction-row{
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
