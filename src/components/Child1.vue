<template>
  <div>child1</div>
</template>

<script>
  import Child from './Child2.vue'
  export default {
    name: 'child1',
    components: { Child },
    data() {
      return {
        txt: 'child1',
      }
    },
  }
</script>
