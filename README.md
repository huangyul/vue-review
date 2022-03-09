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

### 条件渲染

###### v-if 和 v-show

v-if 是“真正”的条件渲染，因为它会确保在切换过程中，条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

###### v-if 与 v-for

当 v-if 与 v-for 一起使用时，v-if 具有比 v-for 更高的优先级。
当处于同一节点时，v-if 没有权限获取 v-for 的变量

```html
<!-- 这里v-if的i没有定义 -->
<li v-for="i in 100" v-if="i > 10"></li>
```

### 事件处理

###### 关于传参

```html
<button @click="onClick('message', $event)"></button>
```

```javascript
methods: {
  onClick(msg, evnet) {
    console.log(msg) // message
    console.log(evnet) // 访问原生事件
  },
},
```

### 多事件

```html
<button @click="onClick('message', $event), two"></button>
```

```javascript
methods: {
  onClick(msg, evnet) {
    console.log(msg) // message
    console.log(evnet) // 访问原生事件
  },
  two() {}
},
```

### 事件修饰符

```html
<!-- 阻止单击事件继续冒泡 -->
<a @click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form @submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div @click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div @click.self="doThat">...</div>
```

### 表单输入

修饰符

1. `.lazy`
2. `.number`：自动将用户输入值转为数值类型
3. `.trim`：自动过滤用户输入的首尾空白字符

### 深入组件

#### 组件注册

```javascript
Vue.component('my-component-name', {
  //options
})
```

#### Props

###### 单向数据流

父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

解决方法：1、使用计算属性；2、子组件在 data 自己维护多一份数据。

#### 非 Prop 的 Attribute

父组件有传东西（包括事件），但是子组件没有放到 props 中，都可以通过 this.$attrs 获取

```javascript
app.component('my-component', {
  template: `
        <div class="date-picker">
          <input type="datetime-local" />
        </div>
        `,
  created() {
    console.log(this.$attrs)
  },
})
```

###### 禁用 Attribute 继承

`inheritAttrs: false`

#### 自定义事件

```javascript
this.$emit('xxx')
```

```html
<my-component @xxx='xxx'></my-componet>
```

###### 定义所有发出的事件

```javascript
app.component('my-component', {
  emits: ['xxx'],
})
```

###### v-model

默认情况下，组件上的 v-model 使用 modelValue 作为 prop 和 update：modelValue 作为事件

```html
<my-component v-model:title="bookTitle"></my-component>
```

```javascript
app.component('my-component', {
  props: {
    title: String,
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  `,
})
```
