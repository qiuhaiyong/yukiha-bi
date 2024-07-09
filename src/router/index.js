import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ScreenEditor',
      component: () => import('@/views/screen/ScreenEditor.vue')
    }
  ]
})

export default router
