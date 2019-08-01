import Vue from 'vue'
import Router from 'vue-router'
import Hub from './views/Hub.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hub',
      component: Hub
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('./views/Inventory.vue')
    },
    {
      path: '/passwords',
      name: 'passwords',
      component: () => import('./views/Passwords.vue')
    }
  ]
})
