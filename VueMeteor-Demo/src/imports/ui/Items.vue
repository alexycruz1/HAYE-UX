<template>
  <div class="courses-tab">
    <div class ="courses">
      <h1>Courses</h1>
        <ul>
          <li>Matematicas</li>
          <li>Español</li>
          <li>Ciencias Sociales</li>
        </ul> 
    </div>
    <div class ="students-courses">
      <h1>Students</h1>
        <ul>
          <li>Pedro Lopez</li>
          <li>Ana lanza</li>
          <li>Carolina Caceres</li>
          <li>Andrea Calderon</li>
          <li>Juan Perez</li>
          <li>Antonio Martinez</li>
        </ul> 
    </div>
    <div class ="course-info">
      <h1>Español</h1>
        <p>
        Este es un curso de español.
        </p>
      <h1>Instructor</h1>
      <div class="select">
        <select name="slct" id="slct">
          <option>Choose an option</option>
          <option value="1">Pure CSS</option>
          <option value="2">No JS</option>
          <option value="3">Nice!</option>
        </select>
      </div>
      <div class="botones"> 
        <button class="btn" type="button">Submit</button>
        <button class="btn red" type="button">Delete</button>
      </div>
    </div>
    
    
    
  </div>
</template>

<script>
import { use } from 'vue-supply'
import { mapGetters } from 'vuex'


export default {
  
  mixins: [
    use('Items'),
  ],

  computed: {
    ...mapGetters({
      count: 'items/count',
    }),

    items () {
      return this.$supply.Items.items
    },
  },
}
</script>
<style lang="css" scoped>
li{
  margin-bottom:30px; 
}
h1{
  margin-left: 50px;
}
.courses-tab {
  margin-left:0px;
  width: 100%;
  height:100vh;
  display: flex;
}
.courses{
  padding: 10px;
  margin-left:0px;
  width: 298px;
  height: 100%;
  background: white;
}
.students-courses{
  padding: 10px;
  margin-left:0px;
  width: 500px;
  height: 100%;
}
.course-info{
  padding: 10px;
  margin-left:0px;
  width: 298px;
  height: 100%;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #9fa8da ;
  background-image: none;
}
/* Custom Select */
.select {
  position: relative;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #e8eaf6;
  overflow: hidden;
  border-radius: .25em;
}
select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 .5em;
  color: #e8eaf6;
  cursor: pointer;
}
select::-ms-expand {
  display: none;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  background: white;
  pointer-events: none;
}
/* Transition */
.select:hover {
  color: #e8eaf6;
}
.select::after {
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}

/* button */
.botones{
  position: relative;
  display: flex;
  margin-top:40px
}
.btn {
  width: 150px;
  height: 40px;
  margin-right: 20px;
  padding: 0;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  
  background-color: #116d31;
  color: #ecf0f1;
  
  transition: background-color .3s;
}

.btn:hover, .btn:focus {
  background-color: #27ae60;
}

.btn.orange {
  background-color: #e67e22;
}

.btn.orange:hover, .btn.orange:focus {
  background-color: #d35400;
}

.btn.red {
  background-color: #6d1018;
}

.btn.red:hover, .btn.red:focus {
  background-color: #c0392b;
}
</style>

