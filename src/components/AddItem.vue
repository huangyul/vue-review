<template>
  <div>
    <input
      type="text"
      :value="item"
      @keyup.enter="$emit('update:item', $event.target.value)"
    />
    <button @click="$emit('update:item', $event.target.value)">添加</button>
  </div>
</template>

<script>
  export default {
    props: { item: String },
    data() {
      return {}
    },
    methods: {
      addItem() {
        // this.$emit('add-item', this.item)
        // this.item = ''
      },
    },
  }
</script>
