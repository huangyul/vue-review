<template>
  <div>
    <h1>{{ title }}</h1>

    <div>
      <h4>新增商品</h4>
      <add-item v-model:item="item"></add-item>
    </div>

    <item-list :itemList="itemList"></item-list>
  </div>
</template>

<script>
  import ItemList from './components/ItemList.vue'
  import AddItem from './components/AddItem.vue'
  export default {
    name: 'App',
    components: { ItemList, AddItem },
    data() {
      return {
        title: '购物车',
        itemList: ['🍎', '🍌', '🧆'],
        item: '',
      }
    },
    methods: {
      addItem(item) {
        this.itemList.push(item)
      },
    },
  }
</script>

<style>
  .item {
    cursor: pointer;
  }
  .active {
    background-color: #838504;
  }
</style>
