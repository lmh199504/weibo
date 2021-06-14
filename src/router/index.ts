import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/index/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
	redirect: 'index',
	children: [
		{
			path: 'game',
			name: 'Game',
			component: () => import('@/views/game/game.vue')
		},
		{
			path:'index',
			name: 'Home',
			component: () => import('@/views/home/home.vue')
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

export default router
