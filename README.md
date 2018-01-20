
# vue-admin-template
这是基于[线上地址](http://panjiachen.github.io/vueAdmin-template)修改的管理后台模板,结合我们公司的使用情况保留了部分结构并改写了部分规则，并添加了一些常用的组件，包含了axios常用库和iconfont，详细的使用可看各文件内的注释。

## Extra
eslint: 代码规范方面，使用了elementFE的代码规范 
- [饿了么eslint](https://www.npmjs.com/package/eslint-plugin-actionable-elements)

i18n: 路由标题生成方面，根据router里面meta元数据的title进行匹配生成，使用了国际化语言库，因此各种标题的语言版本要预先定义好，在src目录下lang目录里面进行定义，目前只定义了zh和en版本


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
|  +-- api 模块接口
|  +-- assets 静态资源。一般图片。按目录分好，以下也是。
|  +-- components 公共组件
|  +-- directive 存放vue自定义指令
|  +-- lang 国际化语言包，关联文件为utils/i18n.js
|  +-- router 路由
|  +-- icons 图标, 可以到 iconfont.cn 上选择并生成自己的业务图标库，再进行使用,推荐单独导出 svg 的引入使用方式
|  +-- store 存放全局属性,方法
|  +-- styles 存放全局样式
|  +-- views 业务页面
|  |   +-- module-name
|  |   |   +-- ***.vue
|  +-- index.html
|  +-- app.vue
|  +-- main.js 入口文件
|  +-- permission.js 判断是否拥有登录权限
+-- static 存放静态资源库，目前存放了tinymce
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

## 与后端的约定
- 接口均以api开头
- 非登录状态接口需要返回506

<!-- // -->
    *  ┏┓　　　┏┓
    *┏┛┻━━━┛┻┓
    *┃　　　　　　　┃ 　
    *┃　　　━　　　┃
    *┃　┳┛　┗┳　┃
    *┃　　　　　　　┃
    *┃　　　┻　　　┃
    *┃　　　　　　　┃
    *┗━┓　　　┏━┛
    *　　┃　　　┃神兽保佑
    *　　┃　　　┃代码无BUG！
    *　　┃　　　┗━━━┓
    *　　┃　　　　　　　┣┓
    *　　┃　　　　　　　┏┛
    *　　┗┓┓┏━┳┓┏┛
    *　　　┃┫┫　┃┫┫
    *　　　┗┻┛　┗┻┛ 
    *　　　
    */