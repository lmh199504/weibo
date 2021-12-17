<template>
	<div class="imgDynamic">
		<DynamicHead :itemData="itemData"/>
		<div class="img_main">
			<div v-if="itemData.pic_num > 1">
				<div class="content_text">
					{{ itemData.text_raw }}
				</div>
				<div class="imgWrapper">
					<div class="threeImg" v-for="(item,index) in itemData.pic_ids" :key="index">
						<a-image :src="'https://wx1.sinaimg.cn/large/' + item + '.jpg'" :preview="false"/>
					</div>
				</div>
			</div>
			<div v-else class="oneImg">
				<div class="img_dynamic_right">
					<div class="content_text">{{ itemData.text_raw }} </div>
				</div>
				<div class="img_dynamic_left">
					<a-image :src="'https://wx1.sinaimg.cn/large/' + item + '.jpg'" v-for="item in itemData.pic_ids" :key=" 'https://wx1.sinaimg.cn/large/' + item + '.jpg'" :preview="false"></a-image>
				</div>
				
			</div>
		</div>
		
		<DynamicFooter />
	</div>
</template>

<script lang="ts">
	import { defineComponent,reactive, computed } from 'vue'
	import DynamicFooter from '@/components/dynamicFooter/dynamicFooter.vue'
	import DynamicHead from '@/components/dynamicHead/index.vue'
	interface ImgItem{
		title:string
		url:string
		readNum: number
	}
	export default defineComponent({
		name: 'ImgDynamic',
		props: {
			itemData: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		setup() {
			const length = 1
			const imgList = reactive<ImgItem[]>([])
			for ( let i = 0; i < length; i ++) {
				imgList.push({
					title: '这是一个图片',
					url: 'https://reactlmh.oss-cn-beijing.aliyuncs.com/images/ccd2a280-d652-11ea-8d08-bbc0b0f9d824.png',
					readNum: 8911002
				})
			}

			// 需要显示的图片
			const showImgList = computed(() => {
				if(imgList.length>=4) {
					return imgList.filter((item,index) => index<4)
				}else if(imgList.length>=1) {
					return imgList.filter((item,index) => index == 0)
				}else {
					return []
				}
				
			})

			return {
				imgList,
				showImgList
			}
		},
		components: {
			DynamicFooter,
			DynamicHead
		}
	})
</script>

<style lang="less" scoped>
	@import './imgDynamic.less';
</style>

<style lang="less" scoped>
	.threeImg{
		.ant-image{
			height: 100%;
			.ant-image-img{
				height: 100%;
			}
		}
	}
	.oneImg{
		// display: flex;
		// .img_dynamic_left{
		// 	width: 158px;
		// 	height: 102px;
		// 	margin-right: 10px;
		// }
	}
</style>