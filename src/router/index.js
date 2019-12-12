import Vue from 'vue'
import VueRouter from 'vue-router'
import signContract from '../views/sign-contract.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: signContract,
    meta:{title:'合同签约'}
  },
  {
    path: '/sign-confirm',
    name: 'confirm',
    component: () => import('../views/sign-confirm.vue'),
    meta:{title:'合同签约'}
  },
  {
    path: '/key-information',
    name: 'information',
    component: () => import('../views/key-information.vue'),
    meta:{title:'关键信息'}
  },
  {
    path: '/take-photo',
    name: 'takePhoto',
    component: () => import('../views/take-photo.vue'),
    meta:{title:'身份验证'}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta:{title:'登录'}
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
