import Vue from 'vue'
import Router from 'vue-router'
//import Content from '@/components/content'
import Article from '@/components/article'
import Home from '@/components/home'
import Message from '@/components/message'
import Other from '@/components/other'
import Comicchapters from '@/components/comic/chapters'
import Comicchapterimgs from '@/components/comic/chapterimgs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        document.title = '辛宗彦的主页'
        next()
      }
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      beforeEnter: (to, from, next) => {
        document.title = '文章'
        next()
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      beforeEnter: (to, from, next) => {
        document.title = '消息'
        next()
      }
    },
    {
      path: '/other',
      name: 'other',
      component: Other,
      beforeEnter: (to, from, next) => {
        document.title = '其他'
        next()
      }
    },
    {
      path: '/comic/chapters',
      name: 'Comicchapters',
      component: Comicchapters,
      beforeEnter: (to, from, next) => {
        document.title = '漫画'
        next()
      }
    },
    {
      path: '/comic/chapterimgs',
      name: 'Comicchapterimgs',
      component: Comicchapterimgs,
      beforeEnter: (to, from, next) => {
        document.title = '漫画'
        next()
      }
    },
  ]
})

