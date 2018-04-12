<template>
  <div>
    <div class="public-footer" :class ="{footer_bottom: xxx }">
      <div class="footer-title">
        xinzongyan @ 2018
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'footer',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        xxx: true
      }
    },
    methods:{
      isfooter_bottom: function() {
        $("body").scrollTop(1); //控制滚动条下移1px
        if($("body").scrollTop() > 0) {
          $("public-footer").removeClass("footer_bottom");
          alert("有滚动条");
          return false;
        }
        else {
          $("public-footer").addClass("footer_bottom");
          alert("无滚动条");
          return true;
        }
        $("body").scrollTop(0); //滚动条返回顶部
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  }

  img {
    border: none;
    display: block;
  }

  .clearfloat {
    zoom: 1;
  }


  .public-footer {
    height: 60px;
    background: rgba(53, 44, 10, 0.9);
    text-align: center;
  }
  .footer_bottom {
    position: fixed;bottom: 0;width:100%;
  }
  .public-footer .footer-title {
    margin:0 auto;
    line-height: 60px;
    width:400px;
    font-weight: 400;
    font-size: 20px;
    color: #fff;
  }

</style>
