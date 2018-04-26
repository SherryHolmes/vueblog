<template>
  <div>
    <div class="public-header clearfloat ">
        <div class="header-container">
        <div style="float: left;width: 75%;height: 100%;">
          <div class="header-logo clearfloat">
            <a href="/">
              <p> <span>Zy</span>xin</p>
            </a>
          </div>
          <div class="header-nav clearfloat">
            <ul>
              <template v-for="item in header_nav_items" >
                <li class="navmenu navmenuhover" @click="toggle(header_nav_items,item)">
                  <router-link to= "" @click.native="linkChange(item)" class="styie">
                      <span :class="{ header_nav_active: item.isactive }"> {{item.label}} </span>
                  </router-link>
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div style="float: left;width: 25%;height: 100%;">
          <div class="header-login clearfloat">
            <ul>
              <template v-for="item in header_login_items">
                <li class="navmenu" @click="toggle(header_login_items,item)">
                  <router-link to="" class="styie" :class="[ { header_login_noacthover: !item.isactive },{ header_login_active: item.isactive }]" >
                    <span style="font-size: 16px"> {{item.label}} </span>
                  </router-link>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>


  export default {
    name: 'blogheader',
    data() {
      return {
        header_nav_items: [
          {label: '首页', path: '', isactive: false},
          {label: '文章', path: 'article', isactive: false},
          {label: '留言', path: 'message', isactive: false},
          {label: '其他', path: 'other', isactive: false},
        ],
        header_login_items: [
          {label: '立即登录', isactive: false},
          {label: '免费注册', isactive: true},
        ],
      }
    },
    components: {

    },
    created () {
      let that = this
      that.initData()
    },
    methods: {
      initData: function () {
        let that = this

        if ( this.$route.fullPath === "/")
        {
          this.header_nav_items[0].isactive = true
        }
        else if ( this.$route.fullPath === "/article")
        {
          this.header_nav_items[1].isactive = true
        }
        else if ( this.$route.fullPath === "/message")
        {
          this.header_nav_items[2].isactive = true
        }
        else if ( this.$route.fullPath === "/other")
        {
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
      linkChange: function (item) {
        this.$router.push({path: '/' + item.path});

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header_nav_active {
    color: #009A61;
  }
  .header_login_active {
    color: #fff;
    background: #009A61;
  }
  .header_login_active:hover {
    background-color: #006741;
    border-color: #00432a;
  }
  .header_login_noacthover:hover {
    background-color: #F3F3F3;
  }

  div, dl, dt, dd, ul, li, h1, h2, h3, h4, h5, h6, input, form, a, p, textarea {
    margin: 0;
    padding: 0;
  }



  ol, ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    display: block;
    color: #757575;
  }

  img {
    border: none;
    display: block;
  }

  .clearfloat {
    zoom: 1;
  }


  /* common.css*/
  .public-header {
    height: 64px;
    overflow: hidden;
    border-top:3px solid #009A61;
    border-bottom: 1px solid #eee;;
    #background: rgba(0,0,0,0.1);
  }

  .header-container {
    margin: 0 auto;
    width: 1000px;
    height: 100%;
  }

  .public-header .header-logo {
    float: left;
    padding-left:50px;
    padding-right:50px;
    line-height: 64px;
  }

  .public-header .header-logo a {
    color: #009A61;
  }

  .public-header .header-logo a span {
    color: #009A61;
  }

  .public-header .header-logo p {
    font-weight: 700;
    font-size: 30px;
    animation: change 5s ease-in infinite;
  }

  @keyframes change {
    0% {
      text-shadow: 0 0 40px red; }
    50% {
      text-shadow: 0 0 40px yellow; }
    100% {
      text-shadow: 0 0 40px blue; }
  }

  .public-header .header-nav {
    float: left ;
    height: 64px;
    line-height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .public-header .header-login {

    height: 64px;
    line-height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .public-header .header-login li{
    float: right ;
  }

  .public-header .navmenu {
    float: left;
    margin: 0 4px;
    border-radius: 4px;
    height: 34px;

  }

  .public-header .navmenu .styie {
    #color: #757575;
    padding:0 13px;
    line-height: 34px;
    font-size:16px;
    font-weight: 500;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  .public-header .navmenuhover:hover {
    background-color: #F3F3F3;
  }


</style>
