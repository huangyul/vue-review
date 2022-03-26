<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/items">items</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data() {
      return {}
    },
    created() {},
    methods: {},
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #3eaf7c;
    display: inline-block;
    margin: 10px;
  }
</style>
