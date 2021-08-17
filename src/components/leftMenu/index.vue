
<template>
	<div class="leftMenu">
		<ul class="topRoute route_ul">
			<li class="route_li">
				<router-link to="/home/index" class="route_item" active-class="route_item_active">
					<span>首页</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/myCollection" class="route_item" active-class="route_item_active">
					<span>我的收藏</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/myPraise" class="route_item" active-class="route_item_active">
					<span>我的赞</span>
				</router-link>
			</li>
		</ul>
		<ul class="route_ul">
			<li class="route_li">
				<router-link to="/home/hotWeiBo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-remen" />
					<span>热门微博</span>
				</router-link>
			</li>
			<li class="route_li">
				
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-shipin" />
					<span>热门视频</span>
				</router-link>
			</li>
		</ul>

		<ul class="route_ul">
			<li class="route_li">
				<router-link to="/home/newWeiBo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-guanzhu1" />
					<span>最新微博</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/friends" class="route_item" active-class="route_item_active">
					<icon-font type="icon-aixin" />
					<span>好友圈</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/specialAttention" class="route_item" active-class="route_item_active">
					<icon-font type="icon-guanzhu" />
					<span>特别关注</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/exclusive" class="route_item" active-class="route_item_active">
					<icon-font type="icon-zhuanshutequan" />
					<span>专属微博</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	export default defineComponent({

	})
</script>

<style lang="less" scoped>
	@import url(./index.less);
</style>