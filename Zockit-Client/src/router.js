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
      component: Hub,
      alias: '/hub'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('./views/Inventory.vue')
    },
    {
      path: '/orders',
      name: 'order',
      component: () => import('./views/Orders.vue')
    },
    {
      path: '/money',
      name: 'money',
      component: () => import('./views/Money.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue')
    },
  ]
})
