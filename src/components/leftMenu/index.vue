<template>
	<div class="leftMenu">
		
		<div class="home_title">首页</div>
		<ul class="topRoute route_ul">
			<li class="route_li">
				<router-link to="/home/index" class="route_item" active-class="route_item_active">
					<icon-font type="icon-quanbu" />
					<span>全部关注</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/newWeiBo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-guanzhu1" />
					<span>最新微博</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/specialAttention" class="route_item" active-class="route_item_active">
					<icon-font type="icon-wodeguanzhu" />
					<span>特别关注</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/friends" class="route_item" active-class="route_item_active">
					<icon-font type="icon-huxiangguanzhuren" />
					<span>好友圈</span>
				</router-link>
			</li>
			
			<!-- <li class="route_li">
				<router-link to="/home/myPraise" class="route_item" active-class="route_item_active">
					<span>我的赞</span>
				</router-link>
			</li> -->
		</ul>
		
		<div class="auto_title">自定义分组</div>
		<ul class="route_ul">
			<li class="route_li">
				<router-link to="/home/hotWeiBo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>热门微博</span>
				</router-link>
			</li>
			
			<li class="route_li">
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>明星</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>名人明星</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>美女</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>明星</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>名人明星</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>美女</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>明星</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>名人明星</span>
				</router-link>
			</li>
			<li class="route_li">
				<router-link to="/home/hotVideo" class="route_item" active-class="route_item_active">
					<icon-font type="icon-dian" />
					<span>美女</span>
				</router-link>
			</li>
		</ul>
		<div class="route_ul tool">
			<div class="up tool_btn" v-if="!isUp" @click="isUp=true">
				<icon-font type="icon-xiangxia" />
				<span>展开</span>
			</div>
			<div class="close tool_btn" v-if="isUp" @click="isUp=false">
				<icon-font type="icon-xiangshang" />
				<span>收起</span>
			</div>
		</div>
		
	</div>
</template>

<script lang="ts">
	import {
		defineComponent, ref, Ref
	} from 'vue'
	export default defineComponent({
		setup() {
			
			let isUp: Ref < boolean > = ref(false);
			return {
				isUp
			}
		}
	})
</script>

<style lang="less" scoped>
	@import url(./index.less);
</style>
