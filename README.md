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

### 计算属性和监听器

###### 计算属性和方法

计算属性有缓存，并且基于响应依赖，这意味着不是响应式的，计算属性不会重新计算

```javascript
computed: {
  now() {
    return Date.now()
  }
}
```

###### 计算属性和监听器

计算属性是多个影响一个，监听器是一个影响多个
