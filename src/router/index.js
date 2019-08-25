import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'

import CreatePlayList from '@/views/CreatePlayList.vue'
import Animals from '@/views/Animals.vue'
import Numbers from '@/views/Numbers.vue'
import Alphabets from '@/views/Alphabets.vue'

import CheckLogin from '@/views/CheckLogin'
import { isNil } from 'lodash'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/check-login',
      name: 'check-login',
      component: CheckLogin,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/Products.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      props: true,
      component: () =>
        import(/* webpackChunkName: "client-chunk-product-details" */ '@/views/Product.vue')
    },
    {
      path: '/create-play-list',
      name: 'create-play-list',
      component: () =>
        import(/* webpackChunkName: "client-chunk-create-play-list" */ '@/views/CreatePlayList.vue'),
     meta: {
        authNotRequired: true
      }
     },

     {
      path: '/watch-video',
      name: 'watch-video',
      component: () =>
        import(/* webpackChunkName: "client-chunk-watch-video" */ '@/views/WatchVideo.vue'),
     meta: {
        authNotRequired: true
      }
      },

      {
      path: '/animals',
      name: 'animals',
      component: () =>
        import(/* webpackChunkName: "client-chunk-animals" */ '@/views/Animals.vue'),
     meta: {
        authNotRequired: true
      }
      },

      {
      path: '/numbers',
      name: 'numbers',
      component: () =>
        import(/* webpackChunkName: "client-chunk-numbers" */ '@/views/Numbers.vue'),
     meta: {
        authNotRequired: true
      }
      },
      
      {
      path: '/alphabets',
      name: 'alphabets',
      component: () =>
        import(/* webpackChunkName: "client-chunk-watch-video" */ '@/views/Alphabets.vue'),
     meta: {
        authNotRequired: true
      }
      },

    { path: '*', redirect: '/' }
  ]
})

/**
 * Handle user redirections
 */
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
