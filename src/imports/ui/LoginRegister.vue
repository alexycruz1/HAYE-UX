<template>
  <div class = "container">

    <div class = "InformationContainer">
      <div>
        <img src = "http://www.elhogar.org/main/wp-content/uploads/2013/01/elhogar-logo-site.png">
      </div>

      <h1>A community of lifelong learners, responsible global citizens, and champions of our own success.</h1>

      <h4>El Hogar is a comprehensive four-year public high school enrolling 1,250 students in grades 9–12. 
      The school opened in the fall of 1987 and graduated its first senior class in the spring of 1989.</h4>

      <input type="email" name="usremail">
      <input type="password" name="pwd">
      <button onclick="window.location.href='/events'" class="btn" type="button">Sign In</button>
      <h2 @click="openCart"><a>Create account</a></h2>
      
    </div>

    <div class = "Video">
      <img src = "https://lh3.googleusercontent.com/oKyiLTuQGXuPVIoaIYoVFutapnCAsGaMeBArFXGNlFEbNP3O4g7QKGgu1G7nvzSNEHKI=h310">
    </div>

  </div>
</template>

<style lang = "less" scoped>

.container{
  width: 100%;
  height: 100vh;
  display: flex;
}

.Video{
  margin-left: 10%;
  margin-top: 8%;
}

.InformationContainer{
  margin-left:2%;
  margin-top:2%;
  width: 50%;
  height: 92%;
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
  
  background-color: #374046;
  color: #ecf0f1;
  
  transition: background-color .3s;
}

.btn:hover, .btn:focus {
  background-color: rgb(158, 158, 158);
}

</style>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    methods: {
      ...mapActions('layout', [
        'showCart'
      ]),
      openCart () {
        this.showCart(true)
      },
    },
  }
</script>