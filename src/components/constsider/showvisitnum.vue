<template>
  <div class="show">
    <p>访问次数：
      <span> {{ayyy}} </span>
    </p>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'showvisitnum',
    data(){
      return {
        axxx: '',
        ayyy: '',
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
          axios.get('/api/show_visitnum', {
            params: {}
          })
        .then(function (response) {
          //console.log(response);
          //that.axxx = response.data.list[0].fields.xxx
          that.ayyy = response.data.list[0].fields.yyy
          //console.log(that.ayyy);
        })
        .catch(function (response) {
          console.log(response);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .show {
    background: #f3f3f3;;
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    width:218px;
    height:76px;
    line-height: 76px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
  }
  .show span{
    font-size: 20px;
    color: #009A61;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);

  }



</style>
