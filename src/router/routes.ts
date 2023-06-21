import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import UserPosts from '../pages/UserPosts.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/posts',
    component: UserPosts,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
