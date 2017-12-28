import { login, logout, getInfo } from '@/api/login'
import { checkLogin } from '@/api/auth'

const user = {
  state: {
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise(async(resolve, reject) => {
        login(userInfo).then((response) => {
          if (response.code === 200) {
            resolve(response)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    CheckLogin({ commit }) {
      return new Promise((resolve, reject) => {
        checkLogin().then((response) => {
          if (response.code === 200) {
            resolve(response)
          } else {
            reject(response)
          }
        })
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then((response) => {
          if (response.status.errCode === 200) {
            commit('SET_NAME', response.data.name)
            commit('SET_AVATAR', response.data.avatarUrl)
            commit('SET_ROLES', response.data.roles)
            resolve(response)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_ROLES', [])
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        resolve()
      })
    }
  }
}

export default user
