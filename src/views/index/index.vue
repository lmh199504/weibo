<template>
	<div>
		<div class="home_content"></div>
		<div class="nav">
			
		</div>
		
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
