<template>
  <div class="show_time">
    {{ShowTime}}
    {{time}}
  </div>
</template>

<script>
  export default{
    data(){
      return{
        time:''
      }
    },
    computed:{
      ShowTime(){
        // 动态显示时间
        var that = this
        setInterval(function(){
         var mydate = new Date()
         var hours = mydate.getHours()
         var minute = mydate.getMinutes()
         var second = mydate.getSeconds()
         var time = hours+':'+minute

         that.time = time
        },1000)
      }
    }
  }
</script>

<style>
  .show_time{
    color:rgba(175, 47, 47, 0.5);
    font-size: 40px;
  }
</style>
