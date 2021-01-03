import Vue from 'vue'
import VueRouter from 'vue-router'

import appLayout from '../components/layouts/app-layout.vue'
import backendLayout from '../components/layouts/backend-layouts.vue'
import physicianlayouts from '../components/layouts/physician-layouts.vue'
import memberLayouts from '../components/layouts/member-layout.vue'
import Login from '../components/pages/login.vue'
import Home from '../components/pages/home/home.vue'
import dashbordOfficer from '../components/pages/userPages/dashbordOfficer/dashbordOfficer.vue'
import physician from "./../components/pages/userPages/dashbordOfficer/userManage/managePhysician/physician.vue";
import addPhysician from "./../components/pages/userPages/dashbordOfficer/userManage/managePhysician/addPhysician/addPhysician.vue";
import equipment from './../components/pages/userPages/dashbordOfficer/userManage/manageEquipmemt/equipment.vue';
import addEquipment from './../components/pages/userPages/dashbordOfficer/userManage/manageEquipmemt/addEquipment/addEquipment.vue'
import addMember from './../components/pages/userPages/dashbordOfficer/userManage/manageMember/addMember/addMember.vue'
import member from './../components/pages/userPages/dashbordOfficer/userManage/manageMember/member.vue'
import news from './../components/pages/userPages/dashbordOfficer/userManage/manageNews/news.vue'
import addnews from './../components/pages/userPages/dashbordOfficer/userManage/manageNews/addnews/addNews.vue'


//Physician
import dashbordPhysician from '../components/pages/userPages/dashbordPhysician/dashbordPhysician.vue'
import physicianRole from '../components/pages/userPages/dashbordPhysician/physicianManage/physician.vue'
import physMember from '../components/pages/userPages/dashbordPhysician/memberManage/physMember.vue'
import physAddMember from '../components/pages/userPages/dashbordPhysician/memberManage/physAddMember/physAddMember.vue'
import physEquipment from '../components/pages/userPages/dashbordPhysician/manageEquipment/physEquipment.vue'
import physAddEquipment from '../components/pages/userPages/dashbordPhysician/manageEquipment/physAddEquipment/physAddEquipment.vue'
import physQueue from '../components/pages/userPages/dashbordPhysician/manageQueue/physQueue.vue'

//news
import physNews from '../components/pages/userPages/dashbordPhysician/manageNews/physNews.vue'
import physAddNews from '../components/pages/userPages/dashbordPhysician/manageNews/physAddNews/physAddNews.vue'

//member
import dashbordMember from '../components/pages/memberPages/dashbordMember.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: backendLayout,
    children: [
      
      {
        path: '/dashbordOfficer',
        name: 'dashbordOfficer',
        component: dashbordOfficer
      },
      {
        path: '/physician',
        name: 'physician',
        component: physician
      },
      {
        path: '/addPhysician',
        name: 'addPhysician',
        component: addPhysician
      },
       {
        path: '/equipment',
        name: 'equipment',
        component: equipment
      },
        {
        path: '/addEquipment',
        name: 'addEquipment',
        component: addEquipment
      },
            {
        path: '/addMember',
        name: 'addMember',
        component: addMember
      },
      {
        path: '/member',
        name: 'member',
        component: member
      },
      {
        path: '/news',
        name: 'news',
        component: news
      },
      {
        path: '/addnews',
        name: 'addnews',
        component: addnews
      },
    ]
  },
    {
    path: '/physician',
    component: physicianlayouts,
    children: [
      {
        path: '/dashbordPhysician',
        name: 'dashbordPhysician',
        component: dashbordPhysician
      },
      {
        path: '/physicianRole',
        name: 'physicianRole',
        component: physicianRole
      },
       {
        path: '/physMember',
        name: 'physMember',
        component: physMember
      },
      {
        path: '/physAddMember',
        name: 'physAddMember',
        component: physAddMember
      },
      {
        path: '/physEquipment',
        name: 'physEquipment',
        component: physEquipment
      },
      {
        path: '/physAddEquipment',
        name: 'physAddEquipment',
        component: physAddEquipment
      },
       {
        path: '/physNews',
        name: 'physNews',
        component: physNews
      },
        {
        path: '/physAddNews',
        name: 'physAddNews',
        component: physAddNews
      },
            {
        path: '/physQueue',
        name: 'physQueue',
        component: physQueue
      },
    ]
  },
        {
    path: '/member',
    component: memberLayouts,
    children: [
      {
        path: '/dashbordMember',
        name: 'dashbordMember',
        component: dashbordMember
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
