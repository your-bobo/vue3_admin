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

// 页面
export function getPageList(page: string, data: any) {
  return hyRequest.post({
    url: `/${page}/list`,
    data
  })
}

export function deletePageList(page: string, id: number) {
  return hyRequest.delete({
    url: `/${page}/${id}`
  })
}

export function addPageItem(page: string, data: any) {
  return hyRequest.post({
    url: `/${page}`,
    data
  })
}

export function updatePageItem(page: string, id: number, data: any) {
  return hyRequest.patch({
    url: `/${page}/${id}`,
    data
  })
}
