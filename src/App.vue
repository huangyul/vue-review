<template>
  <div>
    <message v-model:show="show" class="message-box">
      <template v-slot:title="{ title }">{{ title }}</template>
      新增成功！！
    </message>
    <heading :level="1" :title="title">{{ title }}</heading>
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
  .message-box {
    padding: 10px 20px;
    background: #4fc08d;
    border: 1px solid #42b983;
    position: absolute;
    left: 50%;
    top: 0;
    width: 400px;
    margin-left: -200px;
  }
  .message-box-close {
    float: right;
    cursor: pointer;
  }
</style>
