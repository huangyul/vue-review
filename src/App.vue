<template>
  <div>
    <h1>{{ title }}</h1>

    <div>
      <h4>新增商品</h4>
      <input type="text" v-model="item" @keyup.enter="addItem" />
      <button @click="addItem">添加</button>
    </div>

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
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        title: '购物车',
        itemList: ['🍎', '🍌', '🧆'],
        item: '',
        currentItem: '',
      }
    },
    computed: {
      total() {
        return this.itemList.length
      },
    },
    methods: {
      addItem() {
        this.itemList.push(this.item)
        this.item = ''
      },
    },
  }
</script>

<style scoped>
  .item {
    cursor: pointer;
  }
  .active {
    background-color: #838504;
  }
</style>
