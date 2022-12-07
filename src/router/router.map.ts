import type { RouteRecordRaw } from 'vue-router'

// 静态路由
export const asyncRouter: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/Main.vue')
  },
  {
    path: '/:pathMatch(.*)', //不认识的路径跳notfound
    component: () => import('@/views/not-found/NotFound.vue')
  }
]

//全部路由
export const allRouter: RouteRecordRaw[] = [
  {
    path: '/main/analysis/dashboard',
    component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
  },
  {
    path: '/main/analysis/overview',
    component: () => import('@/views/main/analysis/overview/overview.vue')
  },
  {
    path: '/main/product/category',
    component: () => import('@/views/main/product/category/category.vue')
  },
  {
    path: '/main/product/goods',
    component: () => import('@/views/main/product/goods/goods.vue')
  },
  {
    path: '/main/story/chat',
    component: () => import('@/views/main/story/chat/chat.vue')
  },
  {
    path: '/main/story/list',
    component: () => import('@/views/main/story/list/list.vue')
  },
  {
    path: '/main/system/department',
    component: () => import('@/views/main/system/department/department.vue')
  },
  {
    path: '/main/system/menu',
    component: () => import('@/views/main/system/menu/menu.vue')
  },
  {
    path: '/main/system/role',
    component: () => import('@/views/main/system/role/role.vue')
  },
  {
    path: '/main/system/user',
    component: () => import('@/views/main/system/user/user.vue')
  }
]
