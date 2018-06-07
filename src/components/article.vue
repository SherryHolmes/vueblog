<template>
  <div style="margin: 5px 10px">
    <div class="editor">
      <div class="poster">

        <p class="article_title"> <h1>第一篇文章</h1></p>

      </div>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>


</template>


<script>
  import moMarkd from 'marked'

  export default {

    data() {
      return {
        text:

        '----\n' +
        '\n' +
        '> 鸣谢\n' +
        '\n' +
        '这也算是我的这个网页的第一篇文章啦~~\n' +
        '这个网页搭建的过程有点繁琐，做为小白起初对web开发一片迷茫，这里首先就是感谢好友的帮助，在好友的帮助下学会使用vue框架开发前端，这里附上好友博客链接 [https://pangjian.me/](https://pangjian.me/)，\n' +
        '感兴趣的小伙伴可以学习参考一下。\n' +
        '\n' +
        '> 环境\n' +
        '\n' +
        '这个网站起初是用vue+Django+python做的，后来发现Django实在是太麻烦了，因此后端就换成了Nodejs。\n' +
        '\n' +
        '有了前后端之后，发现需要个数据库，用的mysql，服务器一开始用的是apache，但是后来好友介绍用了caddy，配置简直简单到爆。\n' +
        '\n' +
        '由于自己没什么想法，看朋友用爬虫爬一些资料，因此我也爬了一些漫画下来，对了爬虫用的go语言，顺便提一句，用了go我发现我真的爱上了go，不多说，用过的人才知道。\n' +
        '\n' +
        '> 未来 \n' +
        '\n' +
        '以后会把开发遇到的问题都写在这里，祝各位访客读者一切安好~~~\n'
      }
    },
    computed: {
      compiledMarkdown: function () {
        return moMarkd(this.text, {sanitize: true})
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
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;

  }

  .poster {
    display: flex;
    width: 100%;
    height: 280px;
    padding: 20px;
    background-image: url("http://p1.pstatp.com/large/pgc-image/1521796035541c6d4ce16a9");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;

    align-items: flex-end;
  }
  .article_title{

    line-height: 40px;
    font-weight: 400;
    margin: 0;
    text-shadow: 1px 1px 8px #444;
    font-family: Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: #000 !important;
  }


  code {
    color: #f66;
  }


</style>
