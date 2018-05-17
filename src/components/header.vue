<template>
  <div class="layout-header">
    <div style="margin-top: 2px;">
      <Menu mode="horizontal" theme="dark" active-name="1" @on-select="linkChange">
        <Row type="flex" justify="center">
          <Col :xs="6" :sm="4" :md="4" :lg="2" style="display: flex; justify-content: center;">
          <div class="layout-logo">
            <a href="/">
              <p><span>Zy</span>xin</p>
            </a>
          </div>
          </Col>
          <Col :xs="0" :sm="0" :md="0" :lg="1">
          </Col>
          <Col :xs="18" :sm="12" :md="8" :lg="6">
          <div class="layout-nav" style="width: 100%;">
            <Row type="flex" justify="center">
              <template v-for="item in header_nav_items">
                <Col :xs="6" :sm="6" :md="6" :lg="6" style="display: flex; justify-content: center; ">
                <MenuItem :name=item.path style="padding: 0 ;">
                  <div class="header_nav" @click="toggle(header_nav_items,item)">
                    <span :class="{ header_nav_active: item.isactive }">
                      <Icon :type=item.type></Icon> {{item.label}}
                    </span>
                  </div>
                </MenuItem>
                </Col>
              </template>
            </Row>
          </div>
          </Col>
          <Col :xs="0" :sm="8" :md="11" :lg="12">
          <div class="layout-nav" style="float: right; ">
            <template v-for="item in header_login_items">
              <MenuItem :name=item.path style="padding: 0 15px;">
                <div class="header_nav" @click="toggle(header_login_items,item)">
                  <span style="font-size: 16px;padding: 0;">
                    <Icon :type=item.type></Icon>{{item.label}}
                  </span>
                </div>
              </MenuItem>
            </template>
          </div>
          </Col>
          <Col :xs="0" :sm="8" :md="1" :lg="0">
          </Col>
        </Row>
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
    padding: 0;
    height: 64px;
    line-height: 64px;
  }

  .layout-logo {
    background: transparent;
    border-radius: 3px;
    float: left;
    position: relative;

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
