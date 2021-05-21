
/** 设置模块 state 类型引入 */ 
import SettingsModuleTypes from '@/store/modules/settings/interface'

/** root层 state类型定义 */ 

export default interface RootStateTypes {
    test: string
}

/** vuex 所有state类型定义集合 */ 
export interface AllStateTypes extends RootStateTypes {
    settingModule: SettingsModuleTypes
}