<template>
  <div style="padding: 2%;">
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

    <h1 style="margin-left: 5%">留言板</h1>
    <div class="editboard">
      <!--<h2 style="margin: 1% 3%">留言区</h2>-->
      <Input type="textarea" class="editarea" @on-focus="editfocus" @on-blur="editblur" v-model="edittext"
             :rows=editarea_rows placeholder="我也要说点什么..."> </Input>


      <template v-if="submitbutton_flag">
        <Button type="success" class="submitbutton" v-on:click="tabs">提交留言</Button>
      </template>
    </div>
    <div v-if="message_flag">

      <div v-for="item in message_list">
        <div class="commonboard">
          <div class="title">
            <div class="author">{{item.author}} :</div>
            <div class="date">{{item.date}}</div>
          </div>
          <div>
            <Input type="textarea" class="contnt" readonly :placeholder="item.message"
                   :autosize="{minRows: 1,maxRows: 20}"> </Input>
            <Button class="request">回复</Button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'


  export default {
    name: 'messagge',
    data() {
      return {
        message_flag: false,
        submitbutton_flag: false,
        editarea_rows: 1,//{minRows: 1,maxRows: 9},
        editarea_flag: true,
        message_list: [],
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
        }).then(function (response) {
          //console.log(response);
          that.message_list = response.data;
          that.message_flag = true;
        }).catch(function (response) {
          console.log(response);
        });
      },
      zeroPadding: function (num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      },
      tabs: function () {
        let that = this;
        if (that.edittext === '') {
          that.$Message.success('留言不能为空哦');
          return;
        }
        var cd = new Date();
        that.ctime = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
        that.cdate = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2);
        that.editauthor = '游客';
        that.editdate = this.cdate + ' ' + this.ctime;
        //console.log(this.editauthor);
        //console.log(this.editdate);
        //console.log(this.edittext);
        axios({
          method: 'post',
          url: 'api/write_message',
          data: {
            author: that.editauthor,
            date: that.editdate,
            message: that.edittext,
          },
          timeout: 3000
        }).then(function (response) {
          // console.log(response);
          if (response.status == '200') {
            self.classFade = '';
            self.errinfo = '留言成功！';
            var datamsg = {
              author: that.editauthor,
              date: that.editdate,
              message: that.edittext,
            };
            that.message_list.unshift(datamsg);
            that.message_flag = true;
            that.edittext = '';
            that.$Message.success('留言成功啦~');

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
        //this.initData();

      },
      editfocus: function () {
        this.submitbutton_flag = true;
        this.editarea_rows = 9;
      },
      editblur: function () {
        this.submitbutton_flag = false;
        this.editarea_rows = 1;
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  p {
    margin: 0;
    padding: 0;
  }

  .commonboard {
    margin: 2%;
    background: #f3f3f3;
    border-radius: 4px;
    overflow: hidden;
  }

  .commonboard .title {
    border-bottom: 1px solid #ddd;
    height: 25px;
    margin: 1%;
  }

  .commonboard .title .author {
    float: left;
    margin-left: 1%;
  }

  .commonboard .title .date {
    float: right;
    margin-right: 1%;
  }

  .commonboard .contnt {
    margin: 0 2%;
    width: 96%;
    background: transparent;
    resize: none;
    outline: none;
    border: 0px;
    font-family: Tahoma, Verdana, 宋体, Fixedsys;
    line-height: 150%;
  }

  .editboard {
    margin: 2%;
    background: #f3f3f3;
    border-radius: 4px;
    width: 96%;
    overflow: hidden;
  }

  .editboard .editarea {
    margin: 2%;
    width: 96%;
    max-width: 96%;
    #height: 200px;
    #max-height: 600px;
    font-size: 14px;
    font-family: Tahoma, Verdana, 宋体, Fixedsys;
    line-height: 150%;
    overflow-y: visible;
  }

  .editboard .editarea textarea {
    resize: none !important;
  }

  .commonboard .request {
    float: right;
    margin: 1% 3%;
    padding: 5px 10px;
  }

  .submitbutton {
    float: right;
    margin: 1% 3%;
  }

</style>

