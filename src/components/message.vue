<template>
  <div>
<!--
    <div class="">
      <p class="small">留言区</p>
      <input type="text" v-model="text"/>
      <button v-on:click="tabs">提交留言</button>
    </div>

    <div class="text">
      <div v-for="(name,index) in arr" v-on:click="dele(index)">{{name.text}}</div>
      /* dele的index是下标，用来删除我们点击的信息 */
    </div>
    data() {
      return {
        text: "",
        arr: []
      }
    },
    methods: {
      tabs: function () {
        this.arr.push({text: this.text});
        this.text = "";
        console.log(this.arr)
      },
      dele: function (index) {
        this.arr.splice(index, 1)
      }
    }
-->
    <h1 style="margin-left: 20px">留言板</h1>
    <div v-for="item in message_list">
      <div class="commonboard">
        <div class="title">
          <div class="author">{{item.author}} :</div>
          <div class="date">{{item.date}}</div>
        </div>
        <Input type="textarea" class="contnt" readonly :placeholder="item.message" :autosize="{minRows: 1,maxRows: 20}" > </Input>
        <Button class="request">回复</Button>
      </div>
    </div>
    <div class="editboard">
      <h2 style="margin-left: 10px">留言区</h2>
      <Input type="textarea"  class="editarea" v-model="edittext" :autosize="{minRows: 9,maxRows: 9}" placeholder="请输入留言信息..." > </Input>
      <Button type="success" class="submitbutton" v-on:click="tabs">提交留言</Button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'messagge',
    data() {
      return {
        message_list: '',
        edittext: '',
        editauthor: '',
        editdate: '',
        ctime: '',
        cdate: '',
        value7: '',
        value8: ''
      }
    },
    components: {

    },
    created() {
      let that = this;
      that.initData();
    },
    methods: {
      initData: function () {
        let that = this;
        this.edittext = '';
        axios({
          method: 'get',
          url: '/api/get_messageList',
        })
          .then(function (response) {
            //console.log(response);
            that.message_list = response.data
          })
          .catch(function (response) {
            console.log(response);
          });
      },
      zeroPadding: function(num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      },
      tabs: function () {
        var cd = new Date();
        this.ctime = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
        this.cdate = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2);
        this.editauthor = '游客';
        this.editdate = this.cdate + ' ' + this.ctime;
        //console.log(this.editauthor);
        //console.log(this.editdate);
        //console.log(this.edittext);
        axios({
          method: 'post',
          url: 'api/write_message',
          data: {
            author: this.editauthor,
            date: this.editdate,
            message: this.edittext,
          },
          timeout: 3000
        }).then(function (response) {
          // console.log(response);
          if (response.status == '200') {
            self.classFade = '';
            self.errinfo = '留言成功！';
          }
          else {
            self.classFade = '';
            self.errinfo = '留言失敗，未知的錯誤！';
          }
        }).catch(function (error) {
          console.log(error);
          self.classFade = '';
          self.errinfo = '服務器繁忙，請刷新頁面或者稍後重試!(Error code: 504)'
        });
        this.initData();

      },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  p{
    margin:0;
    padding:0;
  }
  .commonboard {
    margin: 10px ;
    background: #f3f3f3;
    border-radius: 4px;
    width: 720px;
    overflow: hidden;

  }
  .commonboard .title{
    border-bottom: 1px solid #ddd;
    height: 25px;
    margin:10px;
  }
  .commonboard .title .author {
    float:left;
    margin-left:5px;
  }
  .commonboard .title .date {
    float:right;
    margin-right:5px;
  }
  .commonboard .contnt{
    margin: 0px 20px;
    background:transparent;
    resize: none;
    outline:none;
    width:680px;
    max-width:680px;
    border:0px;
    font-size:14px;
    font-family: Tahoma,Verdana,宋体,Fixedsys;
    line-height:150%;
  }

  .editboard {
    margin: 10px;
    padding:10px;
    background: #f3f3f3;
    border-radius: 4px;
    width: 720px;
    overflow: hidden;
  }
  .editboard .editarea {
    margin: 10px 20px 10px 10px;
    resize: none;
    width:680px;
    max-width:690px;
    height:200px;
    max-height:600px;
    font-size:14px;
    font-family: Tahoma,Verdana,宋体,Fixedsys;
    line-height:150%;
    overflow-y:visible;
  }
  .commonboard .request{
    float:right ;
    margin: 10px 30px;
    padding:3px 10px;
  }
  .submitbutton{
    float: right;
    margin-right: 20px;
  }

</style>

