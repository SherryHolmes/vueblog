<template>
  <div id="clock">
    <p class="date">{{ cdate }}</p>
    <p class="time">{{ ctime }}</p>
  </div>
</template>

<script>

  export default {
    name: 'comptime',
    data() {
      return {
        week : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        timerID : setInterval(this.updateTime, 1000),
        ctime: '',
        cdate: '',
      }
    },
    created () {
      let that = this
      that.updateTime()
    },
    methods: {
      zeroPadding: function(num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      },
      updateTime: function ()  {
        var cd = new Date();
        this.ctime = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
        this.cdate = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
      },

    }
  }





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #clock {
    background: #009A61;;
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    width:198px;
    height:56px;
    padding:10px;
    color: #daf6ff;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
    border-radius: 4px;
  }
  #clock .time {
    letter-spacing: 0.05em;
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
  #clock .date {
    letter-spacing: 0.05em;
    margin: 0;
    font-size: 20px;
    padding:0;
  }


</style>
