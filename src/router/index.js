import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index'
import Diagram from '../views/Diagram'
import Allportfolio from '../views/Allportfolio'
import Add from '../views/Add'
Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'Index',
    component: Index
    },
    {
      path: '/Diagram',
      name: '图像',
      component: Diagram
    },
    {
        path: '/Allportfolio',
        name: '获取所有portfolio',
        component: Allportfolio
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
