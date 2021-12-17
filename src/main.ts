import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import Antd from 'ant-design-vue'
import '@/assets/styles/mode.less'
import '@/assets/styles/global.less'
// import 'ant-design-vue/dist/antd.css'
import 'ant-design-vue/dist/antd.less'; // 引入官方提供的 less 样式入口文件
import VueI18n from './common/lang/index'
import '@/assets/styles/iconfont/iconfont.css'
import { createFromIconfontCN } from '@ant-design/icons-vue';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2641377_ioiho18hv1.js',
	extraCommonProps: {
	}
});

createApp(App).use(store,key).use(router).use(Antd).use(VueI18n).component('IconFont',IconFont).mount('#app')
