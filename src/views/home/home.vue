<template>
	<div class="wrapper">
		<!-- 左侧导航 -->
		<div class="left_menu">
			<ul class="left_menu_ul">
				<li class="active_li">热门</li>
				<li>头条</li>
				<li>视频</li>
				<li>榜单</li>
				<li>搞笑</li>
				<li>社会</li>
				<li>时尚</li>
				<li>电影</li>
				<li>美女</li>
				<li>体育</li>
				<li>动漫</li>
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
	import { defineComponent } from 'vue'
	export default defineComponent({
		
	})
</script>

<style lang="less" scoped>
	@import './home.less';
</style>
