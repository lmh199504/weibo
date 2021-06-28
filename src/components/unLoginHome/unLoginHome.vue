<template>
	<div class="wrapper">
		<!-- 左侧导航 -->
		<div class="left_menu">
			<ul class="left_menu_ul">
				<li :class="activeId==item.id ? 'active_li':''" v-for="item in menuList" :key="item.id" @click="tapMenu(item)">{{ item.name }}</li>
			</ul>
		</div>
		<!-- 中间区域 -->
		<div class="main-content">
			<div style="background-color: red;"></div>
		</div>
		<!-- 右侧 -->
		<div class="right_content">
			<div style="background-color: green;"></div>
		</div>
	</div>
</template>

<script lang="ts">
	interface menuItem {
		name: string;
		id: number;
	}


	import { defineComponent, reactive, ref } from 'vue'
	export default defineComponent({
		setup() {
			var menuList = reactive([
				{
					name: '热门',
					id: 1
				},
				{
					name: '头条',
					id: 2
				},
				{
					name: '视频',
					id: 3
				},
				{
					name: '榜单',
					id: 4
				},
				{
					name: '搞笑',
					id: 5
				},
				{
					name: '社会',
					id: 6
				},
				{
					name: '时尚',
					id: 7
				},
				{
					name: '电影',
					id: 8
				},
				{
					name: '美女',
					id: 9
				},
				{
					name: '体育',
					id: 10
				},
				{
					name: '动漫',
					id: 11
				}
			])
			var activeId = ref<number>(1)

			// 点击菜单
			const tapMenu = (item: menuItem) => {
				activeId.value = item.id
			}

			return {
				activeId,
				menuList,
				tapMenu
			}
		}
	})
</script>

<style lang="less" scoped>
	@import './unLoginHome.less';
</style>