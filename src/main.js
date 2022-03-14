/* eslint-disable */
import { createApp, h } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 定义全局混入
const myMixin = {
  created() {
    this.hello()
  },

  methods: {
    hello() {
      console.log('hello from mixin')
    },
  },
}

// 自定义指令
app.directive('focus', {
  // 当被绑定的元素挂载
  mounted(el) {
    el.focus()
  },
})

app.directive('permission', {
  mounted(el, building) {
    if (building.value != 'admin') {
      el.parentNode.removeChild(el)
    }
  },
})

// 渲染组件
// <heading :level='n' :title="title">{{title}}</heading>
app.component('heading', {
  props: {
    level: {
      type: String,
      required: true,
    },
  },
  render() {
    return h('h' + this.level, {}, this.$slots.default())
  },
})

app.mixin(myMixin)

app.mount('#app')
