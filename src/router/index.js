import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/items',
    name: 'items',
    component: () => import('../views/Items.vue'),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/Detail.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
