<template>
  <div>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="loading == false" class="">
      <div class="pannal-board">
        <div class="title">
          <h2>漫画</h2>
        </div>
        <div>
          <Row type="flex">
            <template v-for="item in comicInfo">
              <Col :xs="12" :sm="8" :md="6" :lg="6">
              <router-link :to="{path:'/comic/chapters',query:{id:item.id}}" class="">
                <div style="margin: 1%; width: 98%; padding: 1%; ">
                  <div>
                    {{item.name}}
                  </div>
                  <img :src="item.posterurl" width="100%"></img>
                </div>
              </router-link>
              </Col>
            </template>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        comicInfo: '',
        loading: false,
        get: null,
        error: null
      }
    },
    components: {},
    created() {
      let that = this;
      that.initData();
    }, methods: {
      initData: function () {
        let that = this;
        that.error = that.comicInfo = that.chapterimgs = null;
        that.loading = true;
        //this.edittext = '';
        axios({
          method: 'get',
          url: '/api/get_comicInfoAll',
        }).then(function (response) {
          that.comicInfo = response.data;
          that.loading = false;
          //console.log(that.comicInfo);
        }).catch(function (response) {
          console.log(response);
        });
      }
    }
  }
</script>


<style scoped>
  .pannal-board {
    padding: 2%;
    background: #f3f3f3;
    border-radius: 4px;
    overflow: hidden;
  }

</style>
