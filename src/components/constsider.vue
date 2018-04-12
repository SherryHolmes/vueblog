<template>
  <div class="navdate">
    <my-time> </my-time>
    <my-date> </my-date>
  </div>
</template>


<script>

  import myDate from './compdate.vue'
  import myTime from './comptime.vue'
  export default {
    name: 'constsider',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components :{
      myDate,
      myTime
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .navdate{
    margin: 50px auto 10px auto;
    width: 218px;
  }

</style>
