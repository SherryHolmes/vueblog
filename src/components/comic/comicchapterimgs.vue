<template>
  <div>
    <template v-for="item in chapterimgs">
      <div><img :src="item.url" width="100%"></img></div>
    </template>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        comic_id: '',
        chapter_num:'',
        chapterimgs:'',
      }
    },
    created() {
      this.comic_id = this.$route.query.id;
      this.chapter_num = this.$route.query.num;
      let that = this;
      that.initData();
    }, methods: {
      initData: function () {
        let that = this;
        axios({
          method: 'get',
          url: '/api/get_comic_chapter_imgInfo?id='+ this.comic_id + '&num=' + that.chapter_num,
        }).then(function (response) {
          that.chapterimgs = response.data;
          console.log(that.chapterimgs);
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
