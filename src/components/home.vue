<template>
  <div>
    <div class="pannal-board">
      <div class="title">
        <h2>漫画</h2>
      </div>
      <div>
        <Row type="flex">
          <template v-for="item in comicInfo">
            <Col :xs="12" :sm="8" :md="6" :lg="6">
            <router-link to="" @click.native="linkChange(item)" class="">
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
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        comicInfo: '',
      }
    },
    components: {},
    created() {
      let that = this;
      that.initData();
    }, methods: {
      initData: function () {
        let that = this;
        //this.edittext = '';
        axios({
          method: 'get',
          url: '/api/get_comicInfoAll',
        }).then(function (response) {
          that.comicInfo = response.data;
          //console.log(that.comicInfo);
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

        this.$router.push({path:'/comic/comicchapters',query:{id:item.id}});
      }
    }
  }
</script>


<style scoped>
  .pannal-board {
    margin: 2%;
    background: #f3f3f3;
    border-radius: 4px;
    overflow: hidden;
  }

</style>
