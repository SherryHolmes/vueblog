<template>
  <div>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="chapterimgs" class="content">
      <template v-for="item in chapterimgs">
        <img :src="item.url" width="100%"></img>
      </template>
      <div>
        <!--<router-link :to="{path:'/comic/chapterimgs',query:{id:comic_id,num:chapter_num+1}}" class="">-->
        <Button type="success" class="changebutton" v-on:click="tabs"> 点击加载更多</Button>
        <!--</router-link>-->
      </div>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        comic_id: '',
        chapter_num: 0,
        changeChapternum: 0,
        chapterimgs: [],
        loading: false,
        get: null,
        error: null

      }
    },
    created() {
      this.comic_id = this.$route.query.id;
      this.chapter_num = parseInt(this.$route.query.num);
      this.changeChapternum = this.chapter_num;
      let that = this;
      that.initData();
    }, methods: {
      initData: function () {
        let that = this;
        that.error = that.chapterimgs = null;
        that.loading = true;
        axios({
          method: 'get',
          url: '/api/get_comic_chapter_imgInfo?id=' + this.comic_id + '&num=' + this.chapter_num,
        }).then(function (response) {
          that.chapterimgs = response.data;
          that.loading = false;
          //console.log(that.chapterimgs);
        }).catch(function (response) {
          that.error = response;
          console.log(response);
        });
      },
      tabs: function () {
        let that = this;
        return new Promise(resolve => {
          this.changeChapternum += 1
          axios({
            method: 'get',
            url: '/api/get_comic_chapter_imgInfo?id=' + this.comic_id + '&num=' + this.changeChapternum,
          }).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
              that.chapterimgs.push(response.data[i]);
            }
            console.log(that.chapterimgs);
          }).catch(function (response) {
            that.error = response;
            console.log(response);
          });
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    vertical-align: middle;
  }

  .changebutton {
    float: right;
    margin: 1% 3%;
  }
</style>
