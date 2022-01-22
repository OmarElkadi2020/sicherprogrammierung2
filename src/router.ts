import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import DynamicData from './views/DynamicData.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DynamicData',
    name: 'DynamicData',
    component: DynamicData
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
