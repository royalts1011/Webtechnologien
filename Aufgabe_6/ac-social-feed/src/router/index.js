import Vue from 'vue'
import VueRouter from 'vue-router'
import SocialHub from '../views/SocialHub.vue'
import Villager from '../views/Villager.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'SocialHub',
    component: SocialHub
  },
  {
    path: '/villager/:id',
    name: 'Villager',
    component: Villager
  }
  
]

const router = new VueRouter({
  routes
})

export default router
