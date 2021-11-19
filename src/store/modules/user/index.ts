
import { Module } from 'vuex'
import RootStateTypes from '@/store/interface'
import UserModuleTypes from '@/store/modules/user/interface'
import { setToken, getToken, removeToken } from '@/utils/cookies'
import { reqLogin, reqGetUserInfo, reqRegister } from '@/api/user'

const userModule: Module<UserModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        userInfo: {
			username: '',
			email: '',
			header: '',
			status: 0,
			id: -1
		},
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
		SET_USER_INFO: (state, userInfo) => {
			state.userInfo = userInfo
		}
    },
    actions: {
        // user login
        login({ commit }, userInfo) {
            const { username, password } = userInfo
            return new Promise((resolve, reject) => {
                reqLogin({ username: username.trim(), password: password }).then(response => {
					const { data } = response
                    setToken(data.token)
					commit('SET_TOKEN', data.token)
                    resolve('')
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // user logout
        logout({ commit }) {
            commit("SET_USER_INFO", { 
				username: '',
				email: '',
				header: '',
				status: 0,
				id: -1 })
            removeToken()
			return Promise.resolve()
        },

        // get user info
        getInfo({ commit }) {
            return new Promise((resolve, reject) => {
                reqGetUserInfo().then(response => {
                   const { data } = response
                    if (!data) {
                        reject('Verification failed, please Login again.')
                    }
					commit('SET_USER_INFO', data)
					
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
		register({ commit }, registerData) {
			return new Promise((resolve, reject) => {
				reqRegister(registerData)
				.then(response => {
					const { data } = response
					commit('SET_TOKEN', data.token)
					setToken(data.token)
					resolve(data)
				})
				.catch(err => {
					reject(err)
				})
			})
		}
    }
}

export default userModule