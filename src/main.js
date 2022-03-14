import { createApp } from 'vue'
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

app.mixin(myMixin)

app.mount('#app')
