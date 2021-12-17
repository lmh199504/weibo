
<template>
	<div class="loginHome">
		<div class="WB_miniblog">
			<div class="WB_frame">
				<div class="left">
					<LeftMenu />
				</div>
				<div class="main">
					<ReleaseBox />
					<router-view />
				</div>
				<div class="right">
					
				</div>
			</div>
		</div>
		
		<!-- 回到顶部 -->
		<a-back-top />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import LeftMenu from '@/components/leftMenu/index.vue'
	import { useRouter,onBeforeRouteUpdate } from 'vue-router'
	import ReleaseBox from '@/components/releaseBox/releaseBox.vue'
	export default defineComponent({
		setup() {
			const router = useRouter()
			router.replace('/home/index')

			onBeforeRouteUpdate(to => {
				if(to.path === '/home') {
					router.replace('/home/index')
				}
			})
		},
		components: {
			LeftMenu,
			ReleaseBox
		},

	})
</script>

<style scoped lang="less">
	@import './loginHome.less';
</style>