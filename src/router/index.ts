import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import Index from '../views/index/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
	redirect: '/home',
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
			redirect: '/home/index',
			children: [
				{
					path: 'index',
					name: 'Index',
					component: () => import('@/views/home/index/index.vue')
				},
				{
					path: 'myPraise',
					name: 'MyPraise',
					component: () => import('@/views/home/myPraise/index.vue')
				},
				{
					path: 'myCollection',
					name: 'MyCollection',
					component: () => import('@/views/home/myCollection/index.vue'),
					meta: {
						title: "我的收藏"
					}
				},
				{
					path: 'hotWeiBo',
					name: 'HotWeiBo',
					component: () => import('@/views/home/hotWeibo/index.vue'),
					meta: {
						title: "热门微博"
					}
				},
				{
					path: 'hotVideo',
					name: 'HotVideo',
					component: () => import('@/views/home/hotVideo/index.vue'),
					meta: {
						title: "热门视频"
					}
				},
				{
					path: 'newWeiBo',
					name: 'NewWeiBo',
					component: () => import('@/views/home/newWeiBo/index.vue'),
					meta: {
						title: "最新微博"
					}
				},
				{
					path: 'friends',
					name: 'Friends',
					component: () => import('@/views/home/friendQuan/index.vue'),
					meta: {
						title: "好友圈"
					}
				},
				{
					path: 'specialAttention',
					name: 'SpecialAttention',
					component: () => import('@/views/home/specialAttention/index.vue'),
					meta: {
						title: "特别关注"
					}
				},
				{
					path: 'exclusive',
					name: '专属微博',
					component: () => import('@/views/home/exclusiveWeiBo/index.vue')
				},
				{
					path: "group/:gid",
					name: "分组微博",
					component: () => import('@/views/home/group.vue')
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
		},
		{
			path: 'hot',
			name: 'Hot',
			component: () => import('@/views/hot/hot.vue')
		},
		{
			path: 'message',
			name: 'Message',
			component: () => import('@/views/message/message.vue')
		},
		{
			path: "/user/:id",
			name: "User",
			component: () => import('@/views/user/user.vue')
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
	if(store.state.userModule.token && store.state.userModule.userInfo.id == -1){
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
