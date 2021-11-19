import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { AllStateTypes } from '@/store/interface'
import getters from './getters'

/** 引入设置模块 */
import settingModule from '@/store/modules/settings'
//  用户
import userModule from '@/store/modules/user'
// 视频
import videoModule from '@/store/modules/videos'

export default createStore<AllStateTypes>({
  modules: {
    settingModule,
    userModule,
    videoModule
  },
  getters
})

export const key: InjectionKey<Store<AllStateTypes>> = Symbol('vue-store')

// eslint-disable-next-line
export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
