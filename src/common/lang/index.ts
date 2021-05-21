
import store from '@/store'

//语言
import { createI18n } from 'vue-i18n'		//引入vue-i18n组件




export const getSessionLocale = ():string => {
	const loacl_lang = sessionStorage.getItem('lang')
	if(loacl_lang) {
		store.commit('settingModule/SET_LANG',loacl_lang)
		return loacl_lang
	}
	store.commit('settingModule/SET_LANG','zh')
	return 'zh'
}

export const setSessionLocal = (lang: string): void => {
	i18n.global.locale = lang
	sessionStorage.setItem('lang', lang)
	store.commit('settingModule/SET_LANG',lang)
}


// import { 引入的组件 export 出来的 变量} from 'vue-i18n'
//注册i8n实例并引入语言文件
const i18n = createI18n({
	locale: getSessionLocale(),		//默认显示的语言 
	messages: {
		zh: require('./zh_cn.ts'),	//引入语言文件
		en: require('./en_us.ts')
	}
})

export default i18n; //将i18n暴露出去，在main.js中引入挂载