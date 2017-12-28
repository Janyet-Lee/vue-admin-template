
module.exports = {
  dev: {
    port: 9999, // 本地开发启动端口
    target: 'https://easy-mock.com/mock/5a41f4d31445d552d1fb5821/template', // 接口转发地址
    publicPath: ''
  },
  // 部署时候相关配置
  pro: {
    publicPath: ''
  }
}
