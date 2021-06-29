<template>
	<a-config-provider :locale="lang == 'zh'? zhCN : enUS">
		<router-view />
		<fullLoading />
	</a-config-provider>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US'
import 'moment/dist/locale/zh-cn';
import fullLoading from '@/components/full_loading'
import { getToken } from '@/utils/cookies'
export default defineComponent({
	name: 'App',
	components: {
		fullLoading
	},
	setup() {
		const store = useStore()
		const lang = computed(() => store.state.settingModule.lang)
		return {
			enUS,
			zhCN,
			lang
		}
	},
	created() {
		const store = useStore()
		const token = getToken()
		if(token) {
			store.dispatch('userModule/getInfo', token)
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
