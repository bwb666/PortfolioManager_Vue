import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Diagram from '../views/Diagram'
import Allportfolio from '../views/Allportfolio'
import Add from '../views/Add'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'homepage',
    component: Index
    },
    {
      path: '/Diagram',
      name: 'data analysis and show diagram',
      component: Diagram
    },
    {
        path: '/Allportfolio',
        name: 'get all portfolio',
        component: Allportfolio
    },
    {
        path: '/Add',
        name: 'add an investment',
        component: Add,
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
