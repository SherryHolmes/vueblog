<template>
  <div>
    <div>{{comicInfo.name}}</div>
    <div>作者：{{comicInfo.author}}</div>
    <div>介绍：{{comicInfo.introduce}}</div>
    <div><img :src="comicInfo.posterurl" width="100%"></img></div>

    <template v-for="item in comicChapters">
      <router-link to="" @click.native="linkChange(item)" class="">
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
      let that = this;
      that.initData();
    }, methods: {
      initData: function () {
        let that = this;
        axios({
          method: 'get',
          url: '/api/get_comicInfoByid?id=' + that.comic_id,
        }).then(function (response) {
          that.comicInfo = response.data[0];
          //console.log(that.comicInfo);
        }).catch(function (response) {
          console.log(response);
        });

        axios({
          method: 'get',
          url: '/api/get_comic_chapterInfo?id=' + that.comic_id,
        }).then(function (response) {
          that.comicChapters = response.data;
          //console.log(that.comicChapters);
        }).catch(function (response) {
          console.log(response);
        });

      },
      linkChange: function (item) {
        //console.log(name);
        //this.$route.push({path:'/xxx',query:{id:1}});//类似get传参，通过URL传递参数
        //this.$route.push({path:'/xxx',params:{id:1}});//类似post传参
        //接收参数
        //this.$route.query.id
        //this.$route.params.id
        var urlchapter = '/comic/chapters?id='+this.comic_id;
        history.replaceState({}, null, urlchapter);
        //this.$router.push({name:'Comicchapterimgs',params:{id:this.comic_id,num:item.num}});
        this.$router.push({path:'/comic/chapterimgs',query:{id:this.comic_id,num:item.num}});


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
