<template>
  <div>
    <h5>商品列表</h5>
    <transition-group name="fade">
      <p
        v-for="(i, index) in itemList"
        :key="index"
        :class="['item', { active: currentItem === index }]"
        @click="currentItem = index"
      >
        <router-link :to="`/detail/${i}`">
          {{ i }}
        </router-link>
      </p>
    </transition-group>

    <div>总数：{{ total }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      itemList: Array,
    },
    data() {
      return {
        currentItem: '',
      }
    },
    computed: {
      total() {
        return this.itemList.length
      },
    },
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
