import hyRequest from '..'

export function getEntireRoles() {
  return hyRequest.post({
    url: '/role/list'
  })
}

export function getEntirePepartments() {
  return hyRequest.post({
    url: '/department/list'
  })
}

export function getEntireMenus() {
  return hyRequest.post({
    url: '/menu/list'
  })
}
