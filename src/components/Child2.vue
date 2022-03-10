<template>
  <div></div>
</template>

<script>
  export default {
    inject: ['msg'],
    created() {
      console.log(this.msg)
    },
  }
</script>
