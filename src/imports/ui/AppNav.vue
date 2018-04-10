<template>
  <nav>
    <router-link :to="{ name: 'events' }" exact>Events</router-link>
    <router-link :to="{ name: 'courses' }">Courses</router-link>
    <router-link :to="{ name: 'students' }">Students</router-link>
    <router-link :to="{ name: 'notes' }">Notes</router-link>
    <div class="actions">
      <button onclick="window.location.href='/'"><i class="material-icons">exit_to_app</i></button>
    </div>
  </nav>
</template>

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

<style lang="less" scoped>
@import "style/imports";

nav {
  background: @app-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  padding-top: 24px;

  > * {
    flex: 0 0 auto;
  }
  button {
  padding: 8px 12px;
  background: @app-color;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: lighten(@app-color, 10%);
  }
}

button[disabled=disabled], button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
  a {
    color: white;
    display: inline-block;
    padding: 16px 28px;
    border-radius: 3px 3px 0 0;

    &:hover {
      background: lighten(@app-color, 10%);
    }

    &.router-link-active {
      background: @page-background;
      color: @app-color;
    }
  }
}

.app-title {
  font-size: 1.3rem;
  padding: 0 18px;
}

.actions {
  flex: 1 1 auto;
  text-align: right;
  padding: 4px 12px;
}

</style>
