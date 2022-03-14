<template>
  <div>
    <input v-focus type="text" :value="item" @input="onInput" />
    <button v-permission="'123'" @click="addItem">添加</button>
  </div>
</template>

<script>
  export default {
    props: { item: String },
    data() {
      return {}
    },
    emits: ['add-item', 'update:item'],
    methods: {
      onInput(e) {
        this.$emit('update:item', e.target.value)
      },
      addItem() {
        this.$emit('add-item')
      },
    },
  }
</script>
