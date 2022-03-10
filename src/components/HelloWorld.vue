<template>
  <div>
    <component :is="Child"></component>
    <button @click="onClick">切换</button>
  </div>
</template>

<script>
  /* eslint-disable */
  import Child from './Child1.vue'
  import Child1 from './Child2.vue'
  export default {
    name: 'HelloWorld',
    components: { Child, Child1 },
    data() {
      return {
        currentComponent: Child,
      }
    },
    methods: {
      onClick() {
        this.currentComponent = this.currentComponent === Child ? Child : Child1
      },
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
