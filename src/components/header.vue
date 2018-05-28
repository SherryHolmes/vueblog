<template>
  <div class="layout-header">
    <div style="margin-top: 2px; background:transparent ;font-size: 14px;">
      <Row type="flex" justify="center">
        <Col :xs="3" :sm="1" :md="0" :lg="0"></Col>
        <Col :xs="3" :sm="3" :md="4" :lg="3" style="display: flex;  justify-content: center">
        <div class="layout-logo">
          <a href="/">
            <p><span>Zy</span>xin</p>
          </a>
        </div>
        </Col>
        <Col :xs="1" :sm="0" :md="0" :lg="0"></Col>
        <Col :xs="17" :sm="12" :md="7" :lg="8">
        <div class="layout-nav" style="width: 100%;">
          <Row type="flex" justify="center">
            <template v-for="item in header_nav_items">
              <Col :xs="6" :sm="6" :md="6" :lg="6" style="display: flex; justify-content: center; ">
              <router-link :to=item.path style="padding: 0 ;">
                <div class="header_nav" @click="toggle(header_nav_items,item)">
                    <span :class="{ header_nav_active: item.isactive }">
                      <Icon :type=item.type></Icon> {{item.label}}
                    </span>
                </div>
              </router-link>
              </Col>
            </template>
          </Row>
        </div>
        </Col>
        <Col :xs="0" :sm="8" :md="13" :lg="13">
        <div class="layout-nav" style="float: right; ">
          <template v-for="item in header_login_items">
            <router-link :to=item.path style="padding: 0 15px;">
              <div class="header_nav" @click="toggle(header_login_items,item)">
                  <span style="font-size: 16px;padding: 0;">
                    <Icon :type=item.type></Icon>{{item.label}}
                  </span>
              </div>
            </router-link>
          </template>
        </div>
        </Col>
        <Col :xs="0" :sm="0" :md="0" :lg="0"></Col>
      </Row>

    </div>
  </div>
</template>


<script>
  import myHome from './home.vue'
  import myArticle from './article.vue'
  import myMessage from './message.vue'
  import myOther from './other.vue'

  export default {
    name: 'myheader',
    data() {
      return {
        header_nav_items: [
          {label: '首页', type: 'ios-home', isactive: false, path: '/', name: 'home'},
          {label: '文章', type: 'ios-paper', isactive: false, path: '/article', name: 'article'},
          {label: '留言', type: 'ios-compose', isactive: false, path: '/message', name: 'message'},
          {label: '其他', type: 'ios-crop-strong', isactive: false, path: '/other', name: 'other'},
        ],
        header_login_items: [
          {label: '登录', type: 'person', isactive: false, path: '/'},
          {label: '注册', type: 'person-add', isactive: true, path: '/'},
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
      that.initData();
    },
    computed: {},
    watch: {
      $route() {
        //console.log(this.$route);
        for (var i in this.header_nav_items) {
          if (this.$route.name === this.header_nav_items[i].name) {
            this.header_nav_items[i].isactive = true;
          }
          else {
            this.header_nav_items[i].isactive = false;
          }
        }
      }
    },
    methods: {
      initData: function () {
        for (var i = 0; i < this.header_nav_items.length; i++) {
          if (this.$route.name === this.header_nav_items[i].name) {
            this.header_nav_items[i].isactive = true;
          }
          else {
            this.header_nav_items[i].isactive = false;
          }
        }
      },
      toggle: function (items, item) {
        //console.log(this.$route.fullPath);
        for (var x in items) {
          if (items[x] == item) {
            items[x].isactive = true;
          }
          else {
            items[x].isactive = false;
          }
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout-header {
    #background: #495060;
    background: transparent;
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

  .layout-logo {
    color: rgba(255, 255, 255, .6);
  }

  .layout-logo span {
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
