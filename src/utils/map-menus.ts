import type { RouteRecordRaw } from 'vue-router'
import { allRouter } from '@/router/router.map'

export let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]) {
  console.log('allrouter', allRouter)
  console.log('userMenus', userMenus)

  // 根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = allRouter.find((item) => item.path === submenu.url)
      if (route) {
        // 1.给route的顶层菜单增加重定向功能(但是只需要添加一次即可)
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }

        // 2.将二级菜单对应的路径
        routes.push(route)
      }
      // 记录第一个被匹配到的菜单
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  return routes
}
