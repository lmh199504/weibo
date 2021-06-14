<template>
	<div>
		<div class="nav">
			<NavHeader />
		</div>
		<div class="home_content">
			<div class="WB_frame">
				<router-view></router-view>
			</div>
			
		</div>
		
	</div>
</template>

<script lang="ts">
	import NavHeader from '@/components/navHeader/navHeader.vue'
	import {
		defineComponent
	} from 'vue'
	export default defineComponent({
		name: 'Index',
		setup() {
			
			return {
				
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
