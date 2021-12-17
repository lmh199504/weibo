<template>
	<a-config-provider :locale="lang == 'zh'? zhCN : enUS">
		<router-view />
		<fullLoading />
	</a-config-provider>
</template>
<script>
import { defineComponent, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from '@/store'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US'
import 'moment/dist/locale/zh-cn';
import fullLoading from '@/components/full_loading'
import $bus from '@/libs/bus'
export default defineComponent({
	name: 'App',
	components: {
		fullLoading
	},
	setup() {
		const store = useStore()
		const lang = computed(() => store.state.settingModule.lang)
		
		const handleScroll = () => {
			const wScrollY = window.scrollY;	// 当前滚动条top值  
			const wInnerH = window.innerHeight;	// 设备窗口的高度
			const bScrollH = document.body.scrollHeight;	// body总高度   
			if (wScrollY + wInnerH >= bScrollH-10 && wScrollY  > 100) {       
				$bus.emit('scrollEnd')
			}

		}
		onMounted(() => {
			store.commit('settingModule/INIT_MODE')
			window.addEventListener('scroll', handleScroll)
		})
		onUnmounted(() => {
			window.removeEventListener('scroll', handleScroll)
		})
		
		
		return {
			enUS,
			zhCN,
			lang
		}
	}
})
</script>

<style lang="less">
	// @import '~ant-design-vue/dist/antd.less'; // 引入官方提供的 less 样式入口文件
	#app {
		min-height: 100%;
	}
</style>
