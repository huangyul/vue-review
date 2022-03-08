# vue-review

## Vue 基础

创建一个 vue

```javascript
const App = Vue.createApp({
  // 选项
})
App.mount('#app')
```

### 模板语法

### 插值

###### 文本

`{{xxx}}`

###### 原始 html

`v-html="htmltxt"`

### data 和方法

注意点：没有在初始化时放入 data 中的变量不是响应式的
