
import { Module } from 'vuex'
import  RootStateTypes from '@/store/interface'
import SettingsModuleTypes from '@/store/modules/settings/interface'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Cookies from 'js-cookie'
import { modeType, changeStyle } from './mode'
const settingModule: Module<SettingsModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        lang: 'zh',
        loading: false,
		mode: 'daily'
    },
    mutations: {
		SET_LANG(state, lang) {
			if(lang == 'zh') {
				moment.locale('zh-cn')
				state.lang = 'zh'
			} else {
				moment.locale('en')
				state.lang = 'en'
			}
		},
		SET_MODE(state, mode: string) {
			console.log(mode)
			state.mode = mode
			Cookies.set('mode', mode)
			if(mode == 'dark') {
				changeStyle(modeType['dark'])
			} else {
				changeStyle(modeType['daily'])
			}
			
		},
		INIT_MODE(state) {
			const mode = Cookies.get('mode')
			if(mode == 'dark') {
				state.mode = mode
				changeStyle(modeType['dark'])
			} else {
				state.mode = 'daily'
				changeStyle(modeType['daily'])
			}
		},
		SET_LOADING(state, flag: boolean) {
			state.loading = flag
		}
    }
}

export default settingModule
