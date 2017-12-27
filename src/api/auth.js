import request from 'utils/request'

export function checkLogin() {
  return request.get('/api/template/checkLogin')
}
