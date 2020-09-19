import { get, post } from './request'
//获取系统公告列表
function getAnnouncements(params,headers) {

  return get('/app/v1_0/announcements', params,headers)
}

function getNewsList(params) {
  return get('/newsList', params)
}
function updateList(params) {
  return post('/updateNewsList', params)
}
export default {
  getNewsList,
  updateList,
  getAnnouncements
}