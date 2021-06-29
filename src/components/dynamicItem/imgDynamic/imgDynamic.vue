<template>
	<div class="imgDynamic">
		<div class="imgWrapper">
			<a-image-preview-group>
				<div :class="imgClass">
					<a-image :src="item.url" v-for="(item,index) in imgList" :key="index" />
				</div>
			</a-image-preview-group>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent,reactive, computed } from 'vue'

	export default defineComponent({
		name: 'ImgDynamic',
		setup() {
			const imgList = reactive([{
				title: '这是一个图片',
				url: 'https://reactlmh.oss-cn-beijing.aliyuncs.com/images/ccd2a280-d652-11ea-8d08-bbc0b0f9d824.png',
				readNum: 8911002
			},{
				title: '这是一个图片',
				url: 'https://reactlmh.oss-cn-beijing.aliyuncs.com/images/ccd2a280-d652-11ea-8d08-bbc0b0f9d824.png',
				readNum: 8911002
			},{
				title: '这是一个图片',
				url: 'https://reactlmh.oss-cn-beijing.aliyuncs.com/images/ccd2a280-d652-11ea-8d08-bbc0b0f9d824.png',
				readNum: 8911002
			},{
				title: '这是一个图片',
				url: 'https://reactlmh.oss-cn-beijing.aliyuncs.com/images/ccd2a280-d652-11ea-8d08-bbc0b0f9d824.png',
				readNum: 8911002
			},{
				title: '这是一个图片',
				url: 'https://reactlmh.oss-cn-beijing.aliyuncs.com/images/ccd2a280-d652-11ea-8d08-bbc0b0f9d824.png',
				readNum: 8911002
			},{
				title: '这是一个图片',
				url: 'https://reactlmh.oss-cn-beijing.aliyuncs.com/images/ccd2a280-d652-11ea-8d08-bbc0b0f9d824.png',
				readNum: 8911002
			},{
				title: '这是一个图片',
				url: 'https://reactlmh.oss-cn-beijing.aliyuncs.com/images/ccd2a280-d652-11ea-8d08-bbc0b0f9d824.png',
				readNum: 8911002
			},{
				title: '这是一个图片',
				url: 'https://reactlmh.oss-cn-beijing.aliyuncs.com/images/ccd2a280-d652-11ea-8d08-bbc0b0f9d824.png',
				readNum: 8911002
			}]) 
			var imgClass = computed(() => {
				if(imgList.length == 1) {
					return 'oneImg'
				} else if(imgList.length == 2){
					return 'twoImg'
				} else {
					return 'threeImg'
				}

			})
			return {
				imgList,
				imgClass
			}
		}
	})
</script>

<style lang="less" scoped>
	@import './imgDynamic.less';
</style>