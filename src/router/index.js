import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Index from '../views/Index'
import Diagram from '../views/Diagram'
import Allportfolio from '../views/Allportfolio'
import Add from '../views/Add'
import test from '../views/test'
import echarts from '../views/Echarts'
import pieChart from '../views/pieChart'
import zhexian from '../views/zhexian'
import getTime from '../views/getTime'
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
    },
    {
        path: '/Add',
        name: '添加portfolio',
        component: Add,
    },
    {
        path: '/Home',
        name: '',
        component: Home,
    },
    {
        path: '/About',
        name: '',
        component: About,
    },
    {
        path:'/test',
        component:test
    },
    {
        path:'/echarts',
        component:echarts
    },
    {
        path:'/piechart',
        component:pieChart
    },
    {
        path:'/zhexian',
        component:zhexian
    },
    {
        path:'/gettime',
        component:getTime
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
