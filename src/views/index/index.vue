<template>
	<div>
		<div>首页</div>
		<div>{{ $t('title.home')}}</div>
		<a-range-picker v-model:value="value3" />

	</div>
</template>

<script lang="ts">
	import {
		defineComponent,
		ref
	} from 'vue'
	import {
		Moment
	} from 'moment';
	export default defineComponent({
		name: 'Index',
		setup() {

			return {
				value3: ref < Moment[] > ([]),
				value1: ref('中文'),
			}
		}
	})
</script>
<style>
</style>
