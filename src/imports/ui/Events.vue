<template>

<div class="container">

  <div class="calendar-base">

    <div class="year">2017</div>

    <div class="triangle-left"></div>
    <div class="triangle-right"></div>


    <div class="months">
      <span class="month-hover">Jan</span>
      <span class="month-hover">Feb</span> 
      <span class="month-hover">Mar</span> 
      <strong class="month-color">Apr</strong>
      <span class="month-hover">May</span>
      <span class="month-hover">Jun</span>
      <span class="month-hover">July</span> 
      <span class="month-hover">Aug</span> 
      <span class="month-hover">Sep</span> 
      <span class="month-hover">Oct</span> 
      <span class="month-hover">Nov</span> 
      <span class="month-hover">Dec</span>
    </div>
    <hr class="month-line" />

    <div class="days">SUN MON TUE WED THU FRI SAT</div>


    <div class="num-dates">

      <div class="first-week"><span class="grey">26 27 28 29 30 31</span> 01</div>

      <div class="second-week">02 03 04 05 06 07 08</div>

      <div class="third-week"> 09 10 11 12 13 14 15</div>

      <div class="fourth-week"> 16 17 18 19 20 21 22</div>

      <div class="fifth-week"> 23 24 25 26 <strong class="white">27</strong> 28 29</div>

      <div class="sixth-week"> 30 <span class="grey">01 02 03 04 05 06</span></div>

    </div>

    <div class="active-day"></div>

  </div>

  <div class="calendar-left">

    <div class="hamburger">
      <div class="burger-line"></div>

      <div class="burger-line"></div>

      <div class="burger-line"></div>

    </div>



    <div class="num-date">27</div>

    <div class="day">THURSDAY</div>


    <div class="create-event">Create an Event</div>

    <hr class="event-line" />
    <div class="add-event">
      <span class="add">+</span>
    </div>


</div>
</template>

<style lang="less" scoped>
body {
  width: 50%;
  margin: auto;
  background-color: lightgray;
  font-family: 'Kanit', sans-serif;
}

.container{
    margin: auto;
    width: 50%;
    padding-top: 6%;
    height: 50%;
}

.calendar-base {
  width: 900px;
  height: 500px;
  border-radius: 20px;
  background-color: white;
  position: relative;
  z-index: -1;
  color: black;
}

.year {
  color: #E8E8E8;
  font-size: 30px;
  float: right;
  position: relative;
  right: 75px;
  top: 20px;
  font-weight: bold;
}

.triangle-left {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 10px solid #E8E8E8;
  border-bottom: 5px solid transparent;
  float: right;
  position: relative;
  right: 90px;
  top: 36px;
}

.triangle-right {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid #E8E8E8;
  border-bottom: 5px solid transparent;
  float: right;
  position: relative;
  left: 20px;
  top: 36px;
}
.triangle-left:hover{
  border-right: 10px solid#5c6bc0;
}
.triangle-right:hover{
  border-left: 10px solid#5c6bc0;
}

.month-color {
  color: #27AE60;
}
.month-hover:hover{
  color:#27e879 !important;
}

.months {
  color: #AAAAAA;
  position: relative;
  left: 350px;
  top: 90px;
  word-spacing: 10px;
}

.month-line {
  border-color: #E8E8E8;
  position: relative;
  top: 85px;
  width: 57%;
  left: 178px;
}

.days {
  color: #AAAAAA;
  position: relative;
  font-size: 18px;
  left: 355px;
  top: 80px;
  word-spacing: 35px;
  font-weight: 600;
}

.num-dates {
  float: right;
  position: relative;
  top: 110px;
  right: 50px;
  z-index: 1;
}

.first-week {
  margin-bottom: 25px;
  word-spacing: 55px;
}

.second-week {
  margin-bottom: 25px;
  word-spacing: 55px;
}

.third-week {
  margin-bottom: 25px;
  word-spacing: 55px;
}

.fourth-week {
  margin-bottom: 25px;
  word-spacing: 55px;
}

.fifth-week {
  margin-bottom: 25px;
  word-spacing: 55px;
}

.sixth-week {
  margin-bottom: 25px;
  word-spacing: 55px;
}

.active-day {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #5c6bc0;
  position: relative;
  top: 288px;
  left: 668px;
}

.white {
  color: white;
}

.event-indicator {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #2980B9;
  position: relative;
  top: 300px;
  left: 705px;
}

.two {
  position: relative;
  top: 168px;
  left: 535px;
}

.grey {
  color: #AAAAB1;
}

.calendar-left {
  width: 300px;
  height: 500px;
  border-radius: 20px 0px 0px 20px;
  background-color: #5c6bc0;
  position: relative;
  z-index: -1;
  bottom: 500px;
  color: white;
}

.hamburger {
  position: relative;
  top: 25px;
  left: 25px;
}

.burger-line:hover, .hamburger:hover{
  background-color:#27e879 !important;
}

.burger-line {
  width: 25px;
  height: 3px;
  border-radius: 15%;
  margin-bottom: 3px;
}

.num-date {
  font-size: 150px;
  width: 50%;
  margin: 15px auto;
  font-weight: 700;
}

.day {
  width: 50%;
  margin: 0px auto;
  font-size: 30px;
  position: relative;
  bottom: 60px;
}

.current-events {
  font-size: 15px;
  position: relative;
  margin-left: 25px;
  bottom: 30px;
}

.posts {
  text-decoration: underline dotted;
}
.posts:hover{
  color:#27e879 !important;
}

.create-event {
  font-size: 18px;
  position: relative;
  margin-top: 30px;
  margin-left: 25px;
}

.event-line {
  width: 90%;
}

.add-event {
  width: 20px;
  height: 20px;
  padding: 0px;
  border-radius: 50%;
  border: solid white 2px;
  position: relative;
  bottom: 42px;
  left: 260px;
}

.add {
  font-size: 25px;
  position: relative;
  left: 1px;
  bottom: 10px;
}

.add:hover, .create-event:hover, .add-event:hover{
  color:#27e879 !important;
  border-color: #27e879 !important;
}
</style>

<script>
/*import Modal from './Modal.vue'

export default {
  components: {
    Modal,
  },

  methods: {
    async showModal(){
      $('#createEvent').modal('show');
    }
  }
}*/
</script>