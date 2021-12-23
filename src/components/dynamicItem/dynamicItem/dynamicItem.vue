
<template>
	<div class="DynamicItem">
		<imgDynamic :itemData="itemData" v-if="dyType == 'img'"/>
		<videoDynamic v-else :itemData="itemData"/>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed } from 'vue'
	import imgDynamic from '../imgDynamic/imgDynamic.vue'
	import videoDynamic from '../videoDynamic/videoDynamic.vue'
	export default defineComponent({
		name: 'DynamicItem',
		props: {
			itemData: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		setup(props) {
			const num = ref(Math.random())
			
			const dyType = computed(() => {
				props.itemData.page_info
				if(props.itemData?.page_info?.object_type === 'video') {
					return 'video'
				}
				return 'img'
			})
			
			return {
				num,
				dyType
			}
		},
		
		components: {
			imgDynamic,
			videoDynamic
		}
	})
</script>

<style lang="less" scoped>
	@import './dynamicItem.less';
</style>