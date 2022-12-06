import { defineStore } from 'pinia'
import {
  getUserInfoById,
  getUserMenuById,
  loginRequest
} from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN, USER_INFO, USER_MENU_INFO } from '@/global/constants'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

interface ILoginState {
  token: string
  userInfo: any
  userMenuInfo: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => {
    return {
      token: localCache.getCache(LOGIN_TOKEN) ?? '', // ??表示loaclCache.getCache('token')为undefined和null时，取''
      userInfo: localCache.getCache(USER_INFO) ?? {},
      userMenuInfo: localCache.getCache(USER_MENU_INFO) ?? []
    }
  },
  actions: {
    async loginAccountAction(account: IAccount) {
      // 获取token
      const loginRequserData = await loginRequest(account)
      const id = loginRequserData.data.id
      this.token = loginRequserData.data.token
      // 保存token
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 获取用户信息
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      // 获取用户权限信息（菜单）
      const userMenuInfoResult = await getUserMenuById(id)
      const userMenuInfo = userMenuInfoResult.data
      this.userMenuInfo = userMenuInfo

      // 保存用户信息和用户菜单（权限）
      localCache.setCache(USER_INFO, userInfo)
      localCache.setCache(USER_MENU_INFO, userMenuInfo)

      // 重要: 动态的添加路由
      const routes = mapMenusToRoutes(userMenuInfo)
      console.log(11, routes)

      routes.forEach((route) => router.addRoute('main', route))

      router.push('/main')
    }
  }
})

export default useLoginStore
