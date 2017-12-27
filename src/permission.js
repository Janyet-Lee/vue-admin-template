import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  if (store.state.user.token) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
    }
  } else {
    store.dispatch('CheckLogin').then(res => { // 验证是否登录
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        next()
      }
      NProgress.done()
    }).catch(() => {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next('/login')
        NProgress.done()
      }
    })
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
