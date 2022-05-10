import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home')
  },
  {
    path: '/create-blog',
    name: 'create',
    component: () => import('../components/create')
  },
  {
    path: '/read-blog',
    name: 'read',
    component: () => import('../components/read')
  },
  {
    path: '/edit-blog/:id',
    name: 'update',
    component: () => import('../components/update')
  },
  {
    path: '/delete-blog',
    name: 'delete',
    component: () => import('../components/delete')
  }
]
const router = new VueRouter ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router