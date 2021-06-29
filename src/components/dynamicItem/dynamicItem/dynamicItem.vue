
<template>
	<div class="DynamicItem">
		<imgDynamic />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import imgDynamic from '../imgDynamic/imgDynamic.vue'
	export default defineComponent({
		name: 'DynamicItem',
		components: {
			imgDynamic
		}
	})
</script>

<style lang="less" scoped>
	@import './dynamicItem.less';
</style>