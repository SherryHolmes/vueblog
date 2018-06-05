<template>
  <div>
    <div class="menu">
      <div class="menumainicon">
        <Icon @click.native="collapsedSider" :class="rotateIcon" type="navicon-round" size="24"></Icon>
      </div>

      <Sider ref="side1" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed "
             :style="{background: '#fff'}">
        <div v-if="isCollapsed === false">
          <div class="sidebar-overlay active" @click="collapsedSider()"></div>
        </div>
        <!--Menu active-name="1-2" theme="light" width="auto" min-height="1000" accordion :open-names="['1']"-->
        <Menu theme="dark" :class="menuitemClasses" @on-select="changepage">
          <MenuItem name="/">
            <Icon type="ios-home"></Icon>
            <span>首页</span>
          </MenuItem>
          <MenuItem name="/article">
            <Icon type="ios-paper"></Icon>
            <span>文章</span>
          </MenuItem>
          <MenuItem name="/message">
            <Icon type="ios-compose"></Icon>
            <span>留言</span>
          </MenuItem>
          <MenuItem name="/other">
            <Icon type="ios-crop-strong"></Icon>
            <span>其他</span>
          </MenuItem>
        </Menu>
        <div style="width: 100%;height: 4px;background: #eee; overflow: hidden;">
        </div>
        <Menu theme="dark" :class="menuitemClasses">
          <MenuItem name="5">
            <Icon type="person"></Icon>
            <span>登录</span>
          </MenuItem>
          <MenuItem name="6">
            <Icon type="person-add"></Icon>
            <span>注册</span>
          </MenuItem>

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
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
      },
      changepage: function (name) {
        this.$router.push(name);
        this.collapsedSider();
      }

    },
    components: {
      myMenu,
    }
  }
</script>


<style scoped>


  .menu {
    position: fixed;
    left: 0;
    top: 48px;
    bottom: 0;
    z-index: 10;
    min-width: 150px;
    min-height: 100%;
    background: transparent;

  }

  .menumainicon {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 10;
    color: #757575;
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
