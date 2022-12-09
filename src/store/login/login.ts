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
import useMainStore from '../main/main'

interface ILoginState {
  token: string
  userInfo: any
  userMenuInfo: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => {
    return {
      token: '',
      userInfo: {},
      userMenuInfo: []
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

      // 请求多页面需要使用的roles/departments数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()

      // 重要: 动态的添加路由
      const routes = mapMenusToRoutes(userMenuInfo)
      routes.forEach((route) => router.addRoute('main', route))

      router.push('/main')
    },

    loadLocakCacheAction() {
      // 用户进行刷新默认加载数据
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache(USER_INFO)
      const userMenuInfo = localCache.getCache(USER_MENU_INFO)
      if (token && userInfo && userMenuInfo) {
        this.token = token
        this.userInfo = userInfo
        this.userMenuInfo = userMenuInfo

        // 请求多页面需要使用的roles/departments数据
        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction()

        //动态刷新路由
        const routes = mapMenusToRoutes(userMenuInfo)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
