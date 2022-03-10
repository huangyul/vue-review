<template>
  <div>
    <div v-for="item in list" :key="item">
      <slot :item="item"></slot>
    </div>
    <child></child>
  </div>
</template>

<script>
  import Child from './Child1.vue'
  export default {
    name: 'HelloWorld',
    components: { Child },
    data() {
      return {
        list: [1, 2, 3],
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
