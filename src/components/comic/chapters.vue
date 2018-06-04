<template>
  <div>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="loading == false" class="">
      <Row type="flex">
        <Col :xs="24" :sm="12" :md="12" :lg="12">
        <div style="max-width: 500px; padding: 2% ;"><img :src="comicInfo.posterurl" width="100%"></img></div>
        </Col>
        <Col :xs="24" :sm="12" :md="12" :lg="12">
        <div style="padding: 2%;">
          <h2 style="margin: 2% 0">{{comicInfo.name}}</h2>
          <div>作者：{{comicInfo.author}}</div>
          <div>介绍：{{comicInfo.introduce}}</div>
        </div>
        </Col>
      </Row>
<!--
            &lt;!&ndash;带标签显示&ndash;&gt;
            <div v-if="comicChapters" style="padding: 2%;">
              <Tabs type="card">
                <template v-for="tab in chapterArr">
                  <TabPane :label="tab.tabname">
                    <Row type="flex">
                      <template v-for="item in tab.chapternames">
                        <Col :xs="12" :sm="8" :md="6" :lg="6" style="border: 1px solid  #f3f3f3">
                        <router-link :to="{path:'/comic/chapterimgs',query:{id:comic_id,num:item.num}}" class="">
                          <div style="margin:5px 1px;">
                            <div style="">
                              {{item.title}}
                            </div>
                          </div>
                        </router-link>
                        </Col>
                      </template>
                    </Row>
                  </TabPane>
                </template>
              </Tabs>
            </div>
-->


      <div  v-if="loading2 == false" style="padding: 2%;">
        <Row type="flex">
          <template v-for="item in comicChapters">
            <Col :xs="12" :sm="8" :md="6" :lg="6" style="border: 1px solid  #f3f3f3">
            <router-link :to="{path:'/comic/chapterimgs',query:{id:comic_id,num:item.num}}" class="">
              <div style="margin:5px 1px; ">
                <div style="">
                  {{item.title}}
                </div>
              </div>
            </router-link>
            </Col>
          </template>
        </Row>
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
        comicChapters: '',
        chapterArr: [],
        comicInfo: '',
        comic_id: '',
        baseurl: 'http://www.kuaikanmanhua.com',
        loading: false,
        loading2: false,
        get: null,
        error: null
      }
    },
    created() {
      this.comic_id = this.$route.query.id;
      this.initData();
    },
    methods: {
      initData: function () {
        let that = this;
        that.error = that.comicInfo = that.chapterimgs = null;
        that.loading = true;
        that.loading2 = true;

        axios({
          method: 'get',
          url: '/api/get_comicInfoByid?id=' + that.comic_id,
        }).then(function (response) {
          that.comicInfo = response.data[0];
          that.loading = false;
        }).catch(function (response) {
          that.error = response;
          console.log(response);
        });

        axios({
          method: 'get',
          url: '/api/get_comic_chapterInfo?id=' + that.comic_id,
        }).then(function (response) {
          that.comicChapters = response.data;
/*
          var chapternames = [];
          var count = 0;
          var i = 0;
          for (i = 0; i < that.comicChapters.length; i++) {
            count++;
            chapternames.push(that.comicChapters[i]);
            if ((count % 100) === 0) {
              that.chapterArr.push({
                tabname: (count - 99) + '~' + count,
                chapternames: chapternames,
              });
              chapternames = [];
            }
          }
          if ((count % 100) !== 0) {
            that.chapterArr.push({
              tabname: (count - count % 100 + 1) + '~' + count,
              chapternames: chapternames,
            });
          }
*/
          that.loading2 = false;

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
