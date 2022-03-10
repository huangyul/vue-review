<template>
  <HelloWorld>
    <template #default="slotProps">
      <p>{{ slotProps.item }}</p>
    </template>
  </HelloWorld>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld,
    },
    provide: { msg: '123123' },
    data() {
      return {
        msg: 'father',
      }
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
