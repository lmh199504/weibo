<template>
	<div class="videoDynamic">
		<DynamicHead :itemData="itemData"/>
		<div class="right">
			<div class="content_text">之前C罗在新闻发布会上把可乐挪走的行为话题度爆棚。现在C罗被淘汰出局，可乐的“报复”机会来了！</div>
		</div>
		<div class="left">
			<videoPlayer :itemData="itemData" :poster="itemData.page_info.page_pic" :src="itemData.page_info.media_info.mp4_sd_url"/>
		</div>
		<dynamicFooter :itemData="itemData"/>
	</div>
</template>

<script lang="ts">
	import dynamicFooter from '@/components/dynamicFooter/dynamicFooter.vue'
	import videoPlayer from '@/components/videoPlayer/videoPlayer.vue'
	import DynamicHead from '@/components/dynamicHead/index.vue'
	import {
		defineComponent
	} from 'vue'
	export default defineComponent({
		name: 'videoDynamic',
		props: {
			itemData: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		components: {
			dynamicFooter,
			videoPlayer,
			DynamicHead
		}
	})
</script>

<style lang="less" scoped>
	@import url('./videoDynamic.less');
</style>
