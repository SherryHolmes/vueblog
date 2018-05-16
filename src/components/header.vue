<template>
  <div class="layout-header">
    <div style="margin-top: 2px;">
      <Menu mode="horizontal" theme="dark" active-name="1" @on-select="linkChange">
        <div class="layout-logo">
          <a href="/">
            <p><span>Zy</span>xin</p>
          </a>
        </div>
        <div class="layout-nav">
          <template v-for="item in header_nav_items">
            <MenuItem :name=item.path>
              <div class="header_nav" @click="toggle(header_nav_items,item)">
                <span :class="{ header_nav_active: item.isactive }">
                  <Icon :type=item.type></Icon> {{item.label}}
                </span>
              </div>
            </MenuItem>
          </template>
        </div>
        <div class="layout-nav" style="float: right; margin-right: 50px;">
          <template v-for="item in header_login_items">
            <MenuItem :name=item.path>
              <div class="header_nav" @click="toggle(header_login_items,item)">
              <span style="font-size: 16px">
                <Icon :type=item.type></Icon>{{item.label}}
              </span>
              </div>
            </MenuItem>
          </template>
        </div>
      </Menu>
    </div>
  </div>
</template>


<script>
  import myHome from './home.vue'
  import myArticle from './article.vue'
  import myMessage from './message.vue'
  import myOther from './other.vue'

  export default {
    name: 'header',
    data() {
      return {
        header_nav_items: [
          {label: '首页', type: 'ios-home', isactive: false, path: '/'},
          {label: '文章', type: 'ios-paper', isactive: false, path: 'article'},
          {label: '留言', type: 'ios-compose', isactive: false, path: 'message'},
          {label: '其他', type: 'ios-crop-strong', isactive: false, path: 'other'},
        ],
        header_login_items: [
          {label: '登录', type: 'person', isactive: false},
          {label: '注册', type: 'person-add', isactive: true},
        ],
      }
    },
    components: {
      myHome,
      myArticle,
      myMessage,
      myOther,
    },
    created() {
      let that = this
      that.initData()
    },
    methods: {
      initData: function () {
        let that = this

        if (this.$route.fullPath === "/") {
          this.header_nav_items[0].isactive = true
        }
        else if (this.$route.fullPath === "/article") {
          this.header_nav_items[1].isactive = true
        }
        else if (this.$route.fullPath === "/message") {
          this.header_nav_items[2].isactive = true
        }
        else if (this.$route.fullPath === "/other") {
          this.header_nav_items[3].isactive = true
        }

      },
      toggle: function (items, item) {
        for (var x in items) {
          if (items[x] == item) {
            items[x].isactive = true;
          }
          else {
            items[x].isactive = false;
          }
        }
      },
      linkChange: function (name) {
        //console.log(name);
        this.$router.push(name);

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout-header {
    background: #495060;
    padding: 0 50px;
    height: 64px;
    line-height: 64px;
  }

  .layout-logo {
    width: 100px;
    background: transparent;
    border-radius: 3px;
    float: left;
    position: relative;
    left: 20px;
    text-align: center;

  }

  .layout-logo p {
    font-weight: 700;
    font-size: 30px;
    line-height: 60px;
    animation: change 5s ease-in infinite;
  }

  .layout-logo a {
    color: rgba(255, 255, 255, .6);
  }

  .layout-logo a span {
    color: rgba(255, 255, 255, .8);
  }

  .layout-nav {
    float: left;

    margin: 0 auto;
    margin-left: 50px;
  }

  .header_nav {
    color: rgba(255, 255, 255, .4);
    transition: all .4s ease-in-out;
  }

  .header_nav:hover {
    color: #fff;
  }

  .header_nav_active {
    color: #fff;
  }

  @keyframes change {
    0% {
      text-shadow: 0 0 40px red;
    }
    50% {
      text-shadow: 0 0 40px yellow;
    }
    100% {
      text-shadow: 0 0 40px blue;
    }
  }


</style>
