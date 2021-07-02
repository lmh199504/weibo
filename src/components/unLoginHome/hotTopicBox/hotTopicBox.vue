<template>
	<div class="hot_topic_box">
		<h4 class="hot_topic_title">微博热门话题</h4>
		<a-list item-layout="horizontal" :data-source="data">
			<template #renderItem="{ item }">
				<a-list-item>
					<a-list-item-meta
						description="#革命者口碑#">
						<template #title>
							<a href="https://www.antdv.com/">{{ item.title }}</a>
						</template>
						<template #avatar>
							<img class="topic_img" src="@/assets/images/code.png" alt="">
							<!-- <a-avatar src="../../" /> -->
						</template>
					</a-list-item-meta>
				</a-list-item>
			</template>
		</a-list>
	</div>
</template>

<script lang="ts">
	import {
		defineComponent
	} from 'vue';
	interface DataItem {
		title: string;
	}
	const data: DataItem[] = [{
			title: '#革命者口碑#',
		},
		{
			title: '#革命者口碑#',
		},
		{
			title: '#革命者口碑#',
		},
		{
			title: '#革命者口碑#',
		},
	];
	export default defineComponent({
		setup() {
			return {
				data,
			};
		},
	});
</script>

<style lang="less" scoped>
	@import url('./hotTopicBox.less');
</style>
