import { defineStore } from 'pinia'
import { loginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'

const useLoginStore = defineStore('login', {
  state: () => {
    return {
      id: '',
      name: '',
      token: localCache.getCache(LOGIN_TOKEN) ?? '' // ??表示loaclCache.getCache('token')为undefined和null时，取''
    }
  },
  actions: {
    async loginAccountAction(account: IAccount) {
      // 获取token
      const loginRequserData = await loginRequest(account)
      this.id = loginRequserData.data.id
      this.name = loginRequserData.data.name
      this.token = loginRequserData.data.token

      // 保存token
      localCache.setCache(LOGIN_TOKEN, this.token)

      router.push('/main')
    }
  }
})

export default useLoginStore
