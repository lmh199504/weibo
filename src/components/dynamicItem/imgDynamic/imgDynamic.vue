<template>
	<div class="imgDynamic">
		<div v-if="imgList.length>4">
			<div class="content_text">
				四平消防提示您：如遇身体被卡住，不要直接生拉硬拽，及时向消防部门求助
			</div>
			<div class="imgWrapper">
				<div class="threeImg" v-for="(item,index) in showImgList" :key="index">
					<a-image :src="item.url" :preview="false"/>
				</div>
			</div>
			<div><DynamicFooter /></div>
		</div>
		<div v-else class="oneImg">
			<div class="img_dynamic_left">
				<a-image :src="item.url" v-for="item in showImgList" :key="item.url" :preview="false"></a-image>
			</div>
			<div class="img_dynamic_right">
				<div class="content_text">我是一个文字内容啊啊啊 </div>
				<DynamicFooter />
			</div>
		</div>


	</div>
</template>

<script lang="ts">
	import { defineComponent,reactive, computed } from 'vue'
	import DynamicFooter from '@/components/dynamicFooter/dynamicFooter.vue'
	interface ImgItem{
		title:string
		url:string
		readNum: number
	}
	export default defineComponent({
		name: 'ImgDynamic',
		setup() {
			const length = Math.floor(Math.random() * 10) + 1
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
			DynamicFooter
		}
	})
</script>

<style lang="less" scoped>
	@import './imgDynamic.less';
</style>

<style lang="less">
	.threeImg{
		.ant-image{
			height: 100%;
			.ant-image-img{
				height: 100%;
			}
		}
	}
	.oneImg{
		display: flex;
		.img_dynamic_left{
			width: 158px;
			height: 102px;
			margin-right: 10px;
		}
	}
</style>