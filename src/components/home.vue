<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed" :style="{background: '#fff' }">
        <my-menu></my-menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Row>
            <Col :xs="24" :sm="0" :md="0" :lg="0">
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}"
                  type="navicon-round"
                  size="24"></Icon>
            </Col>
          </Row>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          此处加载内容
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import myMenu from './menusider.vue'

  export default {
    data() {
      return {
        isCollapsed: true
      }
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
    },
    methods: {
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
      }
    },
    components: {
      myMenu,
    }
  }
</script>


<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
