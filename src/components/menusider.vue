<template>
  <div>
    <div class="menu">
      <div class="menumainicon">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 10px',color: '#fff'}"
              type="navicon-round"
              size="24">
        </Icon>
      </div>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed "
             :style="{background: '#fff' }">
        <div v-if="isCollapsed === false">
          <div class="sidebar-overlay active" @click="collapsedSider()"></div>
        </div>
        <!--Menu active-name="1-2" theme="light" width="auto" min-height="1000" accordion :open-names="['1']"-->
        <Menu theme="light" width="auto" accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              看漫画
            </template>
            <MenuItem name="1-1">犬夜叉</MenuItem>
            <MenuItem name="1-2">名侦探柯南</MenuItem>
            <Submenu name="1-3">
              <template slot="title">火影忍者</template>
              <Submenu name="1-3-1">
                <template slot="title">第一部</template>
                <MenuItem name="1-3-1-1">第一画</MenuItem>
                <MenuItem name="1-3-1-2">第二画</MenuItem>
              </Submenu>
              <Submenu name="1-3-2">
                <template slot="title">第二部</template>
                <MenuItem name="1-3-2-1">第一画</MenuItem>
                <MenuItem name="1-3-2-2">第二画</MenuItem>
              </Submenu>
              <MenuItem name="3-2">第二画</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              看小说
            </template>
            <MenuItem name="2-1">超魔杀帝国</MenuItem>
            <MenuItem name="2-2">幻城</MenuItem>
          </Submenu>

          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              看视频
            </template>
            <MenuItem name="3-1">最新视频</MenuItem>
            <MenuItem name="3-2">最热视频</MenuItem>
          </Submenu>

        </Menu>
      </Sider>
    </div>
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
      },

    },
    components: {
      myMenu,
    }
  }
</script>


<style scoped>
  .layout {
    width: 100%;
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

  .menu {
    position: fixed;
    left: 0;
    top: 64px;
    bottom: 0;
    z-index: 10;
    min-width: 200px;
    min-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background: transparent;

  }

  .menumainicon {
    position: fixed;
    height: 64px;

    width: 34px;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 38px;
    background: transparent;
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

  .sidebar-overlay.active {
    opacity: .5;
    visibility: visible;
    -webkit-transition-delay: 0;
    -moz-transition-delay: 0;
    transition-delay: 0;
  }

  .sidebar-overlay {
    visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background: #000;
    z-index: 8;

  }
</style>
