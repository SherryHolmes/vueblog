<template>
  <div class="main-footer">
    xinzongyan @ 2018
  </div>
</template>


<script>
  export default {
    name: 'blogfooter',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        xxx: true
      }
    },
    methods: {
      isfooter_bottom: function () {
        $("body").scrollTop(1); //控制滚动条下移1px
        if ($("body").scrollTop() > 0) {
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
  .main-footer {
    text-align: center;
  }
</style>


