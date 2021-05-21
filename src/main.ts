import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import Antd from 'ant-design-vue'
import '@/styles/mode.less'
import 'ant-design-vue/dist/antd.css'
import VueI18n from './common/lang/index'

createApp(App).use(store,key).use(VueI18n).use(router).use(Antd).mount('#app')
