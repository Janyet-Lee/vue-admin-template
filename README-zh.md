# vueAdmin-template

> 这是一个 极简的vue admin 管理后台 它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

[线上地址](http://panjiachen.github.io/vueAdmin-template)

## Extra
如果你想要根据用户角色来动态生成侧边栏和router，你可以使用改分支[permission-control](https://github.com/PanJiaChen/vueAdmin-template/tree/permission-control)
 
 ## 相关项目
 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

 [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)

写了一个系列的教程配套文章，如何从零构建后一个完整的后台项目:
 - [手摸手，带你用 vue 撸后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
 - [手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
 - [手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
 - [手摸手，带你用vue撸后台 系列四(vueAdmin 一个极简的后台基础模板,专门针对本项目的文章,算作是一篇文档)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
 - [手摸手，带你封装一个vue component](https://segmentfault.com/a/1190000009090836)


# vue-admin-template
这是基于[线上地址](http://panjiachen.github.io/vueAdmin-template)修改的管理后台模板,结合我们公司的使用情况保留了部分结构并改写了部分规则，并添加了一些常用的组件，包含了axios常用库和iconfont，详细的使用可看各文件内的注释。

## Extra
eslint: 代码规范方面，使用了elementFE的代码规范 
- [饿了么eslint](https://www.npmjs.com/package/eslint-plugin-actionable-elements)

mock: 接口模拟方面，推荐使用easy-mock
- [easy-mock](https://easy-mock.com/)，也可以使用mock.js

validate: 表达验证方面，可以使用element自带的验证规则，同时也引入了
- [vuelidate](https://monterail.github.io/vuelidate/#sub-installation)，根据项目实际需要选择

chart: 本模板暂未集成echart进去，如有需要可根据一下文档安装使用
- [webpack中使用ECharts](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)
- [ECharts按需引入](https://github.com/ecomfe/echarts/blob/master/index.js)

map: 地图组件方面，可以使用vue-baidu-map，也可以使用ElementFE的高德地图组件，按需选择
[百度地图](https://dafrok.github.io/vue-baidu-map/#/zh/index)
[高德地图](https://elemefe.github.io/vue-amap/#/)

##目录结构
+-- src
  +-- api 模块接口
  +-- assets 静态资源。一般图片。按目录分好，以下也是。
  +-- components 公共组件
  +-- directive 存放vue自定义指令
  +-- lang 国际化语言包，关联文件为utils/i18n.js
  +-- router 路由
  +-- icons 图标, 可以到 iconfont.cn 上选择并生成自己的业务图标库，再进行使用,推荐单独导出 svg 的引入使用方式
  +-- store 存放全局属性,方法
  +-- styles 存放全局样式
  +-- views 业务页面
  |   +-- module-name
  |   |   +-- ***.vue
  +-- index.html
  +-- app.vue
  +-- main.js 入口文件
  +-- permission.js 判断是否拥有登录权限
+-- static 存放静态资源库
+-- utils
  |   +-- request.js 封装的网络请求组件
  |   +-- tools.js 公共方法
  |   +-- excel excel操作相关
  |   +-- i18n.js 国际化相关
+-- private.config.js 跑项目需要配置的变量，内有注释


## Build Setup

``` bash

# Clone project
git clone https://github.com/PanJiaChen/vueAdmin-template.git

# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```