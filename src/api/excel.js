import request from 'utils/request'

export function getList() {
  return request.get('/api/template/getExcelList')
}
