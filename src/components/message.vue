<template>
  <div class="headers">
    <div class="form">
      <input type="text" v-model="text"/>
      <button v-on:click="tabs">提交评论</button>
    </div>

    <div class="text">
      <div v-for="(name,index) in arr" v-on:click="dele(index)">{{name.text}}</div>   /* dele的index是下标，用来删除我们点击的信息 */
    </div>
  </div>
</template>


<script>


    export default {
      name: 'messagge',
      data(){
        return {
          text:"",
          arr:[]
        }
      },
      methods: {
        tabs:function(){
          this.arr.push({text:this.text});
          this.text="";
          console.log(this.arr)
        },
        dele:function(index){
          this.arr.splice(index,1)
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
