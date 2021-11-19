import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import Index from '../views/index/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
	redirect: 'home',
	children: [
		{
			path: 'game',
			name: 'Game',
			component: () => import('@/views/game/game.vue')
		},
		{
			path:'home',
			name: 'Home',
			component: () => import('@/views/home/home.vue'),
			children: [
				{
					path: 'index',
					name: '首页的首页',
					component: () => import('@/views/home/index/index.vue')
				},
				{
					path: 'myPraise',
					name: '我的赞',
					component: () => import('@/views/home/myPraise/index.vue')
				},
				{
					path: 'myCollection',
					name: '我的收藏',
					component: () => import('@/views/home/myCollection/index.vue')
				},
				{
					path: 'hotWeiBo',
					name: '热门微博',
					component: () => import('@/views/home/hotWeibo/index.vue')
				},
				{
					path: 'hotVideo',
					name: '热门视频',
					component: () => import('@/views/home/hotVideo/index.vue')
				},
				{
					path: 'newWeiBo',
					name: '最新微博',
					component: () => import('@/views/home/newWeiBo/index.vue')
				},
				{
					path: 'friends',
					name: '好友圈',
					component: () => import('@/views/home/friendQuan/index.vue')
				},
				{
					path: 'specialAttention',
					name: '特别关注',
					component: () => import('@/views/home/specialAttention/index.vue')
				},
				{
					path: 'exclusive',
					name: '专属微博',
					component: () => import('@/views/home/exclusiveWeiBo/index.vue')
				}
			]
		},
		{
			path:'video',
			name: 'Video',
			component: () => import('@/views/videoPage/videoPage.vue')
		},
		{
			path: 'find',
			name: 'Find',
			component: () => import('@/views/find/find.vue')
		}
	]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/index.vue')
  },
  
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/register/index.vue')
  },
  {
	path: '/test',
	name: 'test',
	component: () => import('@/views/test/index.vue')
  },
  {
	path: '/404',
	name: '404',
	component: () => import('@/views/404/index.vue')  
  },
  {
	path: "/:catchAll(.*)",
	redirect: '/404'
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
router.beforeEach(async (to, from, next) => {
	NProgress.start()
	if(store.state.userModule.token && !store.state.userModule.userInfo.id){
		console.log("已经登录了")
		try{
			await store.dispatch('userModule/getInfo')
			next()
			NProgress.done()
		} catch(e) {
			next()
			NProgress.done()
		}
	} else {
		next()
		NProgress.done()
	}
})

export default router
