import Vue from 'vue'
import Router from 'vue-router'
//import Content from '@/components/content'
import Article from '@/components/article'
import Home from '@/components/home'
import Message from '@/components/message'
import Other from '@/components/other'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: Home,
      beforeEnter: (to, from, next) => {
        document.title = '辛宗彦的主页'
        next()
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        document.title = '辛宗彦-首页'
        next()
      }
    },
    {
      path: '/Article',
      name: 'article',
      component: Article,
      beforeEnter: (to, from, next) => {
        document.title = '辛宗彦-文章'
        next()
      }
    },
    {
      path: '/Message',
      name: 'message',
      component: Message,
      beforeEnter: (to, from, next) => {
        document.title = '辛宗彦-消息'
        next()
      }
    },
    {
      path: '/Other',
      name: 'Other',
      component: Other,
      beforeEnter: (to, from, next) => {
        document.title = '辛宗彦-其他'
        next()
      }
    }
  ]
})

