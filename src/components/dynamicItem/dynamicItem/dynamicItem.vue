
<template>
	<div class="DynamicItem">
		<imgDynamic :itemData="itemData"/>
		<videoDynamic v-if="false"/>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue'
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
		setup() {
			const num = ref(Math.random())
			return {
				num
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