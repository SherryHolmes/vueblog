<template>

  <div >
    <div class="Calendar">
      <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
      <div id="idCalendarPre" @click="pickPre(currentYear,currentMonth)"><<</div>
      <div id="idCalendarNext" @click="pickNext(currentYear,currentMonth)">>></div>
      <span class="choose-year-month">{{ currentYear }}年 {{ currentMonth }}月</span>

      <ul class="weeks">
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li style="color:red">六</li>
        <li style="color:red">日</li>
      </ul>
      <ul class="days">
        <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
        <li v-for="dayobject in days">
          <!--本月-->
          <!--如果不是本月  改变类名加灰色-->
          <span v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month">{{ dayobject.day.getDate() }}</span>
          <!--如果是本月  还需要判断是不是这一天-->
          <span v-else>
            <!--今天  同年同月同日-->
            <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()"
                  class="active">{{ dayobject.day.getDate() }}</span>
            <span v-else>{{ dayobject.day.getDate() }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'compdate',

    data () {
      return {
        currentDay: 1,
        currentMonth: 1,
        currentYear: 1970,
        currentWeek: 1,
        days: []
      }
    },

    created () {
      let that = this
      that.initData(null)
    },
    methods: {
      initData: function (cur) {
        let that = this
        let leftcount = 0 // 存放剩余数量
        let compdate
        if (cur) {
          compdate = new Date(cur)
        } else {
          let now = new Date()
          let d = new Date(that.formatDate(now.getFullYear(), now.getMonth(), 1))
          d.setDate(35)
          compdate = new Date(that.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
        }
        that.currentDay = compdate.getDate()
        that.currentYear = compdate.getFullYear()
        that.currentMonth = compdate.getMonth() + 1
        that.currentWeek = compdate.getDay() // 1...6,0
        if (that.currentWeek == 0) {
          that.currentWeek = 7
        }
        let str = that.formatDate(that.currentYear, that.currentMonth, that.currentDay)
        that.days.length = 0
        // 今天是周日，放在第一行第7个位置，前面6个
        // 初始化本周
        for (let i = that.currentWeek - 1; i >= 0; i--) {
          let d = new Date(str)
          d.setDate(d.getDate() - i)
          let dayobject = {} // 用一个对象包装Date对象  以便为以后预定功能添加属性
          dayobject.day = d
          that.days.push(dayobject) // 将日期放入data 中的days数组 供页面渲染使用
        }
        // 其他周
        for (let i = 1; i <= 42 - that.currentWeek; i++) {
          let d = new Date(str)
          d.setDate(d.getDate() + i)
          let dayobject = {}
          dayobject.day = d
          that.days.push(dayobject)
        }
      },
      pickPre: function (year, month) {
        let that = this
        // setDate(0); 上月最后一天
        // setDate(-1); 上月倒数第二天
        // setDate(dx) 参数dx为 上月最后一天的前后dx天
        let d = new Date(that.formatDate(year, month, 1))
        d.setDate(0)
        that.initData(that.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      },
      pickNext: function (year, month) {
        let that = this
        let d = new Date(that.formatDate(year, month, 1))
        d.setDate(35)
        that.initData(that.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      },
      pickYear: function (year, month) {
        alert(year + ',' + month)
      },
      // 返回 类似 2016-01-02 格式的字符串
      formatDate: function (year, month, day) {
        let y = year
        let m = month
        if (m < 10) m = '0' + m
        let d = day
        if (d < 10) d = '0' + d
        return y + '-' + m + '-' + d
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .Calendar {
    font-family:Verdana;
    font-size:9pt;
    background-color:#EEE;
    text-align:center;
    width:198px;
    height:168px;
    margin:10px 0;
    padding:10px;
    line-height:1.5em;
    border-radius: 4px;
  }
  #idCalendarPre{
    cursor:pointer;
    float:left;
    padding-left:5px;
  }
  #idCalendarNext{
    cursor:pointer;
    float:right;
    padding-right:5px;
  }
  .choose-year-month {

    padding: 0 20px;
  //font-size: 16px;
  //font-weight: 600;
  }

  .Calendar .active {
    font-weight:bold;
    color:#C60;
  }

  .weeks,
  .days  {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .weeks li,
  .days  li {
    list-style-type: none;
    display: inline-block;
    width: 28px;
    padding: 2px 0;
    text-align: center;
    font-size: 11px;
    color: #acacac;
    font-weight: 400;
  }
  .days span {
    display: inline-block;
  }
  .days li .other-month {
    color: #eee;
  }

</style>
