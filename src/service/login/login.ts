import HYRequest from '..'
import type { IAccount } from '@/types'

export function loginRequest(account: IAccount) {
  return HYRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return HYRequest.get({
    url: `/users/${id}`
  })
}

export function getUserMenuById(id: number) {
  return HYRequest.get({
    url: `/role/${id}/menu`
  })
}
