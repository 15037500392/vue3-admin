// 创建用户相关的小仓库

import { defineStore } from 'pinia'
import { login } from '@/api/user'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import type { UserState } from './types/type'
import type { loginForm } from '@/api/user/type'

// 引入路由
import { constantRoute } from '@/router/routes'
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 用户唯一标识token
      menuRoutes: constantRoute,
    }
  },
  // 异步｜逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(params: loginForm) {
      const result = await login(params)
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)

        return true
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
