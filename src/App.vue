<template>
  <div>
    <message v-model:show="show">
      <template v-slot:title="{ title }">{{ title }}</template>
      新增成功！！
    </message>
    <h1>{{ title }}</h1>

    <div>
      <h4>新增商品</h4>
      <add-item v-model:item="item" @add-item="addItem"></add-item>
    </div>

    <item-list :itemList="itemList"></item-list>
  </div>
</template>

<script>
  import ItemList from './components/ItemList.vue'
  import AddItem from './components/AddItem.vue'
  import Message from './components/Message.vue'
  export default {
    name: 'App',
    components: { ItemList, AddItem, Message },
    data() {
      return {
        title: '购物车',
        itemList: ['🍎', '🍌', '🧆'],
        item: '',
        show: false, // 提示框状态
      }
    },
    methods: {
      addItem() {
        this.itemList.push(this.item)
        this.item = ''
        this.show = true
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
