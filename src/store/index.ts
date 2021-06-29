import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import RootStateTypes, { AllStateTypes } from '@/store/interface'


/** 引入设置模块 */
import settingModule from '@/store/modules/settings'
//  用户
import userModule from '@/store/modules/user'


export default createStore<RootStateTypes>({
  state: {
    test: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    settingModule,
    userModule
  }
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

// eslint-disable-next-line
export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
