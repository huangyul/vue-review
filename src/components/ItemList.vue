<template>
  <div>
    <h5>商品列表</h5>
    <p
      v-for="i in itemList"
      :key="i"
      :class="['item', { active: currentItem === i }]"
      @click="currentItem = i"
    >
      {{ i }}
    </p>
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
