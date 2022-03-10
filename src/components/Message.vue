<template>
  <div v-if="show" class="message-box">
    <slot name="title" :title="title"></slot>
    <slot></slot>
    <span class="message-box-close" @click="onClose">x</span>
  </div>
</template>

<script>
  export default {
    props: { show: Boolean },
    emits: ['update:show'],
    data() {
      return {
        title: '恭喜',
      }
    },
    methods: {
      onClose() {
        this.$emit('update:show', false)
      },
    },
  }
</script>

<style scoped>
  .message-box {
    padding: 10px 20px;
    background: #4fc08d;
    border: 1px solid #42b983;
  }
  .message-box-close {
    float: right;
    cursor: pointer;
  }
</style>
