import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import Detail from '@/pages/detail/Detail'
import TabList from '@/pages/testtab/Tab'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/testtab',
      name: 'TabList',
      component:TabList
    }
  ],
  /*页面切换始终保持在最顶部*/
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
