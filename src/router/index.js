import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home/index'
import UserHelp from '../pages/home/userHelp'

import BookMark from '../pages/bookmark' // 主路由
import Object from '../pages/object' // 主路由

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'todo',
      component: r => require.ensure([], () => r(require('@/pages/todo')))
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
      path: '/html2canvas',
      name: 'html2canvas',
      component: r =>
        require.ensure(
          [],
          () => r(require('../pages/html2canvas')),
          'demo.html2canvas'
        ),
      meta: {
        title: 'html2canvas',
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
    },
    {
      // 对象
      path: '/object',
      icon: 'lock-combination',
      name: 'argument',
      title: '对象',
      component: Object,
      children: [
        {
          path: 'argument',
          icon: 'lock-combination',
          name: 'object_argument',
          title: '对象',
          meta: {
            title: '对象-index',
            keepAlive: false
          },
          component: r =>
            require.ensure(
              [],
              () => r(require('../pages/object/objectArgument')),
              'demo.objectArgument'
            )
        },
        {
          path: 'index',
          icon: 'lock-combination',
          name: 'object_index',
          title: '对象',
          meta: {
            title: '对象-index',
            keepAlive: false
          },
          component: r =>
            require.ensure(
              [],
              () => r(require('../pages/object/index')),
              'demo.objectArgument'
            )
        }
      ]
    }
  ]
})
