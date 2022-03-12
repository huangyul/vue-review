<template>
  <transition name="show">
    <div v-if="show">
      <slot name="title" :title="title"></slot>
      <slot></slot>
      <span class="message-box-close" @click="onClose">x</span>
    </div>
  </transition>
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
  /* .show-enter-from {
    opacity: 0;
  }
  .show-leave-to {
    opacity: 0;
  }
  .show-enter-active,
  .show-leave-active {
    transition: opacity 1s ease;
  } */

  .show-leave-active,
  .show-enter-active {
    transition: all 1s ease;
  }

  .show-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  .show-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
</style>
