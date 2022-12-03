import HYRequest from '..'
import type { IAccount } from '@/types'

export function loginRequest(account: IAccount) {
  return HYRequest.post({
    url: '/login',
    data: account
  })
}
