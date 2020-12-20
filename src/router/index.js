import Vue from 'vue'
import VueRouter from 'vue-router'

import appLayout from '../components/layouts/app-layout.vue'
import backendLayout from '../components/layouts/backend-layouts.vue'
import Login from '../components/pages/login.vue'
import Home from '../components/pages/home/home.vue'
import dashbordUser from '../components/pages/userPages/dashbordUser.vue'
import dashbordMember from '../components/pages/memberPages/dashbordMember.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: backendLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
    ]
  },
  {
    path: '/login',
    component: appLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
    ]
  },
  {
    path: '/dashbordUser',
    name: 'dashbordUser',
    component: dashbordUser
  },
  {
    path: '/dashbordMember',
    name: 'dashbordMember',
    component: dashbordMember
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
