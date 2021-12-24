<template>
	<div>
		<div class="nav">
			<NavHeader />
		</div>
		<div class="home_content">
			<router-view :key="key"></router-view>
		</div>
		
	</div>
</template>

<script lang="ts">
	import { useRoute } from 'vue-router'
	import NavHeader from '@/components/navHeader/navHeader.vue'
	import {
		defineComponent, computed
	} from 'vue'
	export default defineComponent({
		name: 'Index',
		setup() {
			const route = useRoute ()
			const key = computed(() => {
				return route.fullPath
			})
			
			return {
				key
			}
		},
		components: {
			NavHeader
		}
	})
</script>
<style lang="less" scoped>
	@import './index.less';
</style>
