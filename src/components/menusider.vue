<template>
  <div>
    <div class="menu">
      <div class="menumainicon">
        <Icon @click.native="collapsedSider" :class="rotateIcon" type="navicon-round" size="24"></Icon>
      </div>

      <Sider ref="side1" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed "
             :style="{background: 'transparent'}">

        <div v-if="isCollapsed === false">
          <div class="sidebar-overlay active" @click="collapsedSider()"></div>
        </div>

        <!--
        <Menu theme="dark" :class="menuitemClasses" width="10rem" @on-select="changepage">
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
        -->
        <ul class="ivu-menu ivu-menu-dark ivu-menu-vertical menu-item" :class="menuitemClasses" style="width: 8rem;">
          <template v-for="item in sider_items">
            <router-link :to=item.path style="text-align: center">
              <li class="ivu-menu-item" @click="changepage(item.path)">
                <Icon :type=item.type></Icon>
                <span>{{item.label}}</span>
              </li>
            </router-link>
          </template>
        </ul>

        <div style="width: 100%;height: 4px;background: transparent; overflow: hidden;">
        </div>

        <div class="ivu-menu ivu-menu-dark ivu-menu-vertical menu-item" :class="menuitemClasses" style="width: 8rem;">

          <div style="text-align: center" @click="userlogin = true">
            <div class="ivu-menu-item">
              <Icon type="ios-home"></Icon>
              <span>登录</span>
            </div>
          </div>

          <Modal v-model="userlogin" title="请登录" width="300">
            <p>用户名</p>
            <input type="text" placeholder="Username" name="username"
                   v-model="userName"><br>
            <p>密 码</p>
            <input type="password" placeholder="Password" name="pwd"
                   v-model="pwd"><br>
            <div slot="footer">
              <Button type="info" size="large" @click="login_regist">注册</Button>
              <Button type="success" size="large" @click="login_login">登录</Button>
            </div>
          </Modal>

          <div style="text-align: center" @click="userregist = true">
            <div class="ivu-menu-item">
              <Icon type="ios-paper"></Icon>
              <span>注册</span>
            </div>
          </div>

          <Modal v-model="userregist" title="请注册" width="300">
            <p>用户名</p>
            <input type="text" placeholder="Username" name="username"
                   v-model="userName"><br>
            <p>密 码</p>
            <input type="password" placeholder="Password" name="pwd"
                   v-model="pwd"><br>
            <p>再次输入</p>
            <input type="password" placeholder="Password" name="pwd2"
                   v-model="pwd2"><br>
            <div slot="footer">
              <Button type="info" size="large" @click="regist_regist">注册</Button>
              <Button type="success" size="large" @click="regist_login">登录</Button>
            </div>
          </Modal>
        </div>


      </Sider>

    </div>
  </div>
</template>

<script>
  import myMenu from './menusider.vue'


  export default {
    data() {
      return {
        userName: '',
        pwd: '',
        pwd2: '',
        isCollapsed: true,
        sider_items: [
          {label: '首页', type: 'ios-home', isactive: false, path: '/', name: 'home'},
          {label: '文章', type: 'ios-paper', isactive: false, path: '/article', name: 'article'},
          {label: '留言', type: 'ios-compose', isactive: false, path: '/message', name: 'message'},
          {label: '其他', type: 'ios-crop-strong', isactive: false, path: '/other', name: 'other'},
        ],
        userlogin: false,
        userregist: false,
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
      changepage: function (path) {
        this.$router.push(path);
        this.collapsedSider();
      },
      login_login() {
        this.$Message.info('暂时不接受登录');
      },
      login_regist() {
        this.userregist = true;
        this.userlogin = false;
      },
      regist_login() {
        this.userregist = false;
        this.userlogin = true;
      },
      regist_regist() {
        this.$Message.info('暂时不接受登录');
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
    min-height: 100%;
    #background: black;

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

  .ivu-menu-vertical .ivu-menu-item,
  .ivu-menu-vertical .ivu-menu-submenu-title {
    #padding: 14px 24px;
    padding: 10px 0;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all .2s ease-in-out;
  }

  .ivu-menu-vertical .ivu-menu-item:hover,
  .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #fff;
    background: #495060;
  }

  .ivu-menu-dark {
    background: rgba(70, 80, 96, .6);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 60px;
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

  .ivu-modal p {
    display: inline-block;
    width: 50px;
    text-align: center;
  }

  .ivu-modal input {
    margin: 5px 0;
    border: 1px solid #e9eaec;
  }
</style>
