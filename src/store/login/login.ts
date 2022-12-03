import { defineStore } from 'pinia'
import { loginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'

const useLoginStore = defineStore('login', {
  state: () => {
    return {
      id: '',
      name: '',
      token: ''
    }
  },
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginRequserData = await loginRequest(account)
      this.id = loginRequserData.data.id
      this.name = loginRequserData.data.name
      this.token = loginRequserData.data.token
    }
  }
})

export default useLoginStore
