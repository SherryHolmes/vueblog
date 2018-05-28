<template>
  <div>
    <div>{{comicInfo.name}}</div>
    <div>作者：{{comicInfo.author}}</div>
    <div>介绍：{{comicInfo.introduce}}</div>
    <div><img :src="comicInfo.posterurl" width="100%"></img></div>

    <template v-for="item in comicChapters">
      <router-link :to="{path:'/comic/chapterimgs',query:{id:comic_id,num:item.num}}" class="">
        <div style="margin:10px 0; height: 100px; clear: float;">
          <div style="height: 100%; float: left;">
            <img :src="item.imgurl" height="100%"></img>
          </div>
          <div style="float: left;">
            {{item.title}}
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        comicChapters: '',
        comicInfo: '',
        comic_id: '',
        baseurl: 'http://www.kuaikanmanhua.com',
      }
    },
    created() {
      this.comic_id = this.$route.query.id;
      this.initData();
    },
    methods: {
      initData: function () {
        let that = this;
        axios({
          method: 'get',
          url: '/api/get_comicInfoByid?id=' + that.comic_id,
        }).then(function (response) {
          that.comicInfo = response.data[0];
        }).catch(function (response) {
          console.log(response);
        });

        axios({
          method: 'get',
          url: '/api/get_comic_chapterInfo?id=' + that.comic_id,
        }).then(function (response) {
          that.comicChapters = response.data;
        }).catch(function (response) {
          console.log(response);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
