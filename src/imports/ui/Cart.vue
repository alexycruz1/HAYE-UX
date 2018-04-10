<template>
  <transition name="right-panel" duration="500">
    <div class="cart-overlay">
      <div class="backdrop" @click="close" />
      <div class="panel" :class="$style.cart">
        <div class="empty-text" :class="$style.meow">
          <h1>Sign Up</h1>
          <h4>Enter the following information in order to create a account in our organization</h4>
          <div>
            <input type="email" name="usremail" placeholder="myEmail@something.com">
          </div>
          <div>
            <input type="password" name="pwd" placeholder="Type your password">
          </div>
          <div>
            <button class="btn" type="button">Sign In</button>  
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    console.log(this.$style)
  },

  methods: {
    ...mapActions('layout', [
      'showCart'
    ]),

    close () {
      this.showCart(false)
    },
  },
}
</script>

<style lang="less" scoped>
@import "style/imports";

.cart-overlay {
  .overlay;
}

.btn {
  width: 150px;
  height: 40px;
  margin-right: 20px;
  padding: 0;
  margin-top:5px;

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

<style lang="less" module>
.cart {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 500px;
}

.meow {
  color: grey;
}
</style>

<style lang="less" module="foo">
.bar {
  color: black;
}
</style>
