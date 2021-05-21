
import { Module } from 'vuex'
import  RootStateTypes from '@/store/interface'
import SettingsModuleTypes from '@/store/modules/settings/interface'
import moment from 'moment'
import 'moment/locale/zh-cn'
const settingModule: Module<SettingsModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        lang: 'zh',
        count: 0,
        loading: false
    },
    mutations: {
        ADD_COUNT(state) {
            state.count += 1
        },
        REDUCE_COUNT(state) {
            state.count -= 1
        },
		SET_LANG(state, lang) {
			console.log(lang)
			if(lang == 'zh') {
				moment.locale('zh-cn')
				state.lang = 'zh'
			} else {
				moment.locale('en')
				state.lang = 'en'
			}
			
		}
    },
    actions: {
        testADD() {
            console.log(12312312332)
        }
    }
}

export default settingModule