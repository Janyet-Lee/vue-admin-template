import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { checkList } from './router'
import { Message } from 'element-ui'

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  // 需要主动调用验证登录接口的页面路由
  if (checkList.includes(to.path)) {
    store.dispatch('CheckLogin').then(res => { // 验证是否登录
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        next()
      }
      NProgress.done()
    }).catch((err) => {
      if (to.path !== '/login') {
        Message({
          type: 'error',
          message: err.data
        })
      }
      if (to.path === '/login') {
        next()
      } else {
        next('/login')
        NProgress.done()
      }
    })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
