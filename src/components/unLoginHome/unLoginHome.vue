<template>
	<div class="wrapper">
		<!-- 左侧导航 -->
		<div class="left_menu">
			<ul class="left_menu_ul">
				<li :class="activeId==item.id ? 'active_li':''" v-for="item in menuList" :key="item.id"
					@click="tapMenu(item)">{{ item.name }}</li>
			</ul>
		</div>
		<!-- 中间区域 -->
		<div class="main-content">
			<!-- 顶部轮播 -->
			<div>
				<a-carousel arrows autoplay>
					<template #prevArrow>
						<div class="custom-slick-arrow" style="left: 10px;z-index: 1;">
							<left-circle-outlined />
						</div>
					</template>
					<template #nextArrow>
						<div class="custom-slick-arrow" style="right: 10px">
							<right-circle-outlined />
						</div>
					</template>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
				</a-carousel>
			</div>
			<!-- 一条动态 -->
			<DynamicItem v-for="(item,index) in dynamicList" :key="index"/>
			<div v-if="loading">
				<a-spin tip="Loading...">
					<div class="spin-content">
					</div>
				</a-spin>
			</div>
		</div>
		<!-- 右侧 -->
		<div class="right_content">
			<div style="background-color: green;"></div>
		</div>
		<!-- 回到顶部 -->
		<a-back-top />
	</div>
</template>
<script lang="ts">
	interface menuItem {
		name: string;
		id: number;
	}
	// 动态 
	import DynamicItem from '@/components/dynamicItem/dynamicItem/dynamicItem.vue'

	import {
		LeftCircleOutlined,
		RightCircleOutlined
	} from '@ant-design/icons-vue';
	import {
		defineComponent,
		reactive,
		ref,
		onMounted,
		onUnmounted
	} from 'vue'
	export default defineComponent({
		setup() {
			var menuList = reactive([{
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
			var activeId = ref < number > (1)

			// 点击菜单
			const tapMenu = (item: menuItem) => {
				activeId.value = item.id
			}

			// 动态列表
			var dynamicList = reactive([
				{
					type: 'img',
					imgLength: 7
				}, {
					type: 'img',
					imgLength: 8
				},{
					type: 'video'
				},{
					type: 'video'
				},{
					type: 'video'
				},{
					type: 'img',
					imgLength: 7
				},{
					type: 'img',
					imgLength: 7
				}
			])
			
			// 加载动态列表

			const loading = ref<boolean>(false)
			const getList = () => {

				if(loading.value == true) {
					return
				}
				loading.value = true
				setTimeout(() => {
					dynamicList.push({
						type: 'img',
						imgLength: 7
					})
					loading.value = false
				}, 1500)
				
			}

			const handleScroll = () => {
				const wScrollY = window.scrollY;	// 当前滚动条top值  
				const wInnerH = window.innerHeight;	// 设备窗口的高度
				const bScrollH = document.body.scrollHeight;	// body总高度   
				if (wScrollY + wInnerH >= bScrollH-10) {       
					getList()
				}
			}
			onMounted(() => {
				window.addEventListener('scroll', handleScroll)
			})
			onUnmounted(() => {
				window.removeEventListener('scroll', handleScroll)
			})
			return {
				activeId,
				menuList,
				tapMenu,
				dynamicList,
				loading
			}
		},
		components: {
			LeftCircleOutlined,
			RightCircleOutlined,
			DynamicItem
		}
	})
</script>

<style lang="less" scoped>
	@import './unLoginHome.less';
</style>
