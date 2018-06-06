<template >
  <div style="margin: 5px 10px">
    <h1><a href="/Port(V3.0).zip" download="Port(V3.0).zip">小南瓜串口下载</a></h1>
    <div class="editor">
      <h2>Md编辑器</h2>
      <!--<textarea :value="input" @input="update"></textarea>-->
      <Input type="textarea" class="editarea"  v-model="input"  :autosize="{minRows: 9}"
             placeholder="请输入留言信息..."> </Input>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>


<script>
  import moMarkd from 'marked'
  //  import moLodash from 'lodash'
  export default {
    name: 'mainother',
    data() {
      return {
        input: '# Hello world'
      }
    },
    computed: {
      compiledMarkdown: function () {
        return moMarkd(this.input, {sanitize: true})
      }
    },
    methods: {
      /*update: _.debounce(function (e) {
        this.input = e.target.value
      }, 300)*/
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .editor {
    margin: 10px 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;

  }

  .editarea ,
  .editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;

  }

  .editarea {
    border: none;
    resize: none;
    #outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;


  }
  code {
    color: #f66;
  }
</style>
