import Vue from 'vue'
import VueRouter from 'vue-router'

import appLayout from '../components/layouts/app-layout.vue'
import backendLayout from '../components/layouts/backend-layouts.vue'
import Login from '../components/pages/login.vue'
import Home from '../components/pages/home/home.vue'
import dashbordPhysician from '../components/pages/userPages/dashbordPhysician/dashbordPhysician.vue'
import dashbordMember from '../components/pages/memberPages/dashbordMember.vue'
import dashbordOfficer from '../components/pages/userPages/dashbordOfficer/dashbordOfficer.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: backendLayout,
    children: [
      
      {
        path: '/dashbordPhysician',
        name: 'dashbordPhysician',
        component: dashbordPhysician
      },
      {
        path: '/dashbordMember',
        name: 'dashbordMember',
        component: dashbordMember
      },
      {
        path: '/dashbordOfficer',
        name: 'dashbordOfficer',
        component: dashbordOfficer
      }
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
    path: '/home',
    name: 'home',
    component: Home
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
