import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/styles/index.scss' // global css

import ElementUI from 'element-ui'
import Vuelidate from 'vuelidate'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import i18n from './lang' // Internationalization

import '@/styles/index.scss' // global css
import '@/styles/validate.scss' // validate css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
import request from '../utils/request'

Vue.prototype.api = request // 注册全局请求方法

// 表单验证库
Vue.use(Vuelidate)

// 国际化相关
Vue.use(ElementUI, { locale })
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable */

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
