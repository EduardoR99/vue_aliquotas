import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StateView from '../views/StateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aliquotasIcms',
      name: 'home',
      component: HomeView
    },
    { 
      path: '/aliquotasIcms/estado/:nome', 
      name: 'estado', 
      component: StateView 
    }
  ]
})

export default router
