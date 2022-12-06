import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import { asyncRouter } from './router.map'

const router = createRouter({
  history: createWebHashHistory(),
  routes: asyncRouter
})

//导航守卫
router.beforeEach((to, from, next) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) {
    next('/login')
  } else {
    next()
  }
})

// router.beforeEach((to) => {
//   // 只有登录成功(token), 才能真正进入到main页面
//   const token = localCache.getCache(LOGIN_TOKEN)
//   if (to.path === '/main' && !token) {
//     console.log(456432)

//     return '/login'
//   }
// })

export default router
