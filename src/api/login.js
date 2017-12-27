import request from 'utils/request'

export function login(userInfo) {
  return request.post('/api/template/login', {
    ...userInfo
  })
}

export function logout() {
  return request.post('/api/template/logout') // 假地址 自行替换
}

export function getInfo() {
  return request.get('/api/template/getInfo') // 假地址 自行替换
}
