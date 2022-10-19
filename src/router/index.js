import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/StringAppView.vue'
import AxiosDemo from '../views/AxiosDemo.vue'
import AboutMe from '../views/AboutMe.vue'
import Area from '../views/Area.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
    path: '/axiosDemo',
    name:'axiosDemo',
    component: AxiosDemo
    },
    {
      path: '/aboutMe',
      name:'aboutMe',
      component: AboutMe
    },    
    {
      path: '/area',
      name:'area',
      component: Area
    }    
  
  ]
})

export default router
