import Vue from 'vue'
import Router from 'vue-router'
//import Content from '@/components/content'
import Article from '@/components/article'
import Home from '@/components/home'
import Message from '@/components/message'
import Other from '@/components/other'
import Comicchapters from '@/components/comic/comicchapters.vue'
import Comicchapterimgs from '@/components/comic/comicchapterimgs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
      path: '/article',
      name: 'article',
      component: Article,
      beforeEnter: (to, from, next) => {
        document.title = '辛宗彦-文章'
        next()
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      beforeEnter: (to, from, next) => {
        document.title = '辛宗彦-消息'
        next()
      }
    },
    {
      path: '/other',
      name: 'Other',
      component: Other,
      beforeEnter: (to, from, next) => {
        document.title = '辛宗彦-其他'
        next()
      }
    },
    {
      path: '/comic/comicchapters',
      name: 'Comicchapters',
      component: Comicchapters,
    },
    {
      path: '/comic/comicchapterimgs',
      name: 'Comicchapterimgs',
      component: Comicchapterimgs,
    },
  ]
})

