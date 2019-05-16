import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home/index'
import UserHelp from '../pages/home/userHelp'

import BookMark from '../pages/bookmark' // 主路由

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userHelpDetails',
      name: 'userHelpDetails',
      component: UserHelp,
      meta: {
        title: 'userHelpDetails',
        keepAlive: false
      }
    },
    {
      // 书签样式样式
      path: '/bookmark',
      icon: 'lock-combination',
      name: 'bookmark',
      title: '书签',
      component: BookMark,
      children: [
        {
          path: 'index',
          icon: 'lock-combination',
          name: 'bookmark_index',
          title: '书签',
          meta: {
            title: '书签-index',
            keepAlive: false
          },
          component: r =>
            require.ensure(
              [],
              () => r(require('../pages/bookmark')),
              'demo.bookmark'
            )
        }
      ]
    }
  ]
})
