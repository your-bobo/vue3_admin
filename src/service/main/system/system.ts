import hyRequest from '../..'

// 用户管理
export function getUserData(data: any) {
  return hyRequest.post({
    url: '/users/list',
    data
  })
}

export function deleteUserListItem(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}

export function addUser(data: any) {
  return hyRequest.post({
    url: '/users',
    data
  })
}

export function updateUser(id: number, data: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data
  })
}
