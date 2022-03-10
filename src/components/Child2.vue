<template>
  <div>child2</div>
</template>

<script>
  export default {
    name: 'child2',
    props: {
      txt: String,
    },
    emits: ['update:txt'],
  }
</script>
