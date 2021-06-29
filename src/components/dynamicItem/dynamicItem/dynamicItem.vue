
<template>
	<div class="DynamicItem">
		<imgDynamic v-if="num>0.5" />
		<videoDynamic v-else/>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue'
	import imgDynamic from '../imgDynamic/imgDynamic.vue'
	import videoDynamic from '../videoDynamic/videoDynamic.vue'
	export default defineComponent({
		name: 'DynamicItem',
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