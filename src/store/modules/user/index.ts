
import { Module } from 'vuex'
import RootStateTypes from '@/store/interface'
import UserModuleTypes from '@/store/modules/user/interface'
import { setToken, getToken, removeToken } from '@/utils/cookies'
import { reqLogin, reqGetUserInfo, reqRegister } from '@/api'
const userModule: Module<UserModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        username: '',
        header: '',
        _id: '',
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_AVATAR: (state, url) => {
            state.header = url
        },
        SET_ID: (state, id) => {
            state._id = id
        },
        SET_USERNAME: (state, username) => {
            state.username = username
        }
    },
    actions: {
        // user login
        login({ commit }, userInfo) {
            const { username, password } = userInfo
            return new Promise((resolve, reject) => {
                reqLogin({ username: username.trim(), password: password }).then(response => {
                    const { data } = response
                    commit('SET_TOKEN', data.token)
                    commit('SET_AVATAR', data.headerImg)
                    commit('SET_ID', data._id)
                    commit('SET_USERNAME',data.username)
                    setToken(data.token)
                    resolve('')
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // user logout
        logout({ commit }) {
            commit('SET_TOKEN', '')
            commit('SET_AVATAR', '')
            commit('SET_ID', '')
            commit('SET_USERNAME','')
            removeToken()
        },

        // get user info
        getInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                reqGetUserInfo({token: state.token }).then(response => {
                    const { data } = response
                    if (!data) {
                        reject('Verification failed, please Login again.')
                    }
                    const {  username, headerImg, _id } = data
                    commit('SET_NAME', username)
                    commit('SET_AVATAR', headerImg)
                    commit("SET_ID", _id)

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
					commit('SET_AVATAR', data.headerImg)
					commit('SET_ID', data._id)
					commit('SET_USERNAME',data.username)
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