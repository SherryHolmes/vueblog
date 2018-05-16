<template>
  <div>
    <div class="layout">
      <Layout>
        <Header style="height: 60px;">
          <my-header></my-header>
        </Header>
        <Layout>
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
          <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <div class="main-content">
                <router-view></router-view>
              </div>
              <div class="main-sider">
                <Constsider></Constsider>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      <Layout>
        <Footer>
          <my-footer></my-footer>
        </Footer>
      </Layout>
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
  .layout {
    border: 0px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  body {
    margin: 0 auto;
    padding: 0;
    font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
    font-size: 14px;
    line-height: 1.42858;
    color: #757575;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    width: 100%;

  }

  .main-header {
    background: #f5f7f9;
    margin: 0 auto;
    width: 100%;
  }

  .public-container {
    margin: 0 auto;
    width: 1000px;
    height: 100%;
  }

  .main-content {
    float: left;
    width: 750px;
    height: 100%;
    overflow: hidden;
  }

  .main-sider {
    float: right;
    #background: black;
    width: 250px;
    height: 100%;
    overflow: hidden;
  }
</style>
