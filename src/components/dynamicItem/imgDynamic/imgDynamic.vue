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
		
		<DynamicFooter :itemData="itemData"/>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import DynamicFooter from '@/components/dynamicFooter/dynamicFooter.vue'
	import DynamicHead from '@/components/dynamicHead/index.vue'
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
			return {}
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
