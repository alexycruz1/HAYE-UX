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
</style>

