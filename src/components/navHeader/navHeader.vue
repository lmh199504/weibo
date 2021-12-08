<template>
	<div class="nav-header global_nav_alpha">
		<div class="gn_header clearfix">
			<div class="gn_logo">
				<router-link class="box" to="/">
					<span class="logo"></span>
				</router-link>
			</div>
			<div class="search-box">
				<a-input v-model:value="seachValue" :placeholder="$t('searchPlaceHolder')" class="searchInput" @change="changeSearch" >
					<template #suffix>
						<SearchOutlined class="searchIcon"/> 
					</template>
				</a-input>
				<div class="searchResult" v-if="seachValue">
					
				</div>
			</div>
			
			<div class="center_nav">
				<div class="nav_item flex_column_center nav_item_active" title="首页">
					<i class="iconfont icon-shouye"></i>
				</div>
				<div class="nav_item flex_column_center" title="视频">
					<i class="iconfont icon-ziyuan"></i>
				</div>
				<div class="nav_item flex_column_center" title="热门">
					<i class="iconfont icon-remen1"></i>
				</div>
				<div class="nav_item flex_column_center" title="消息">
					<i class="iconfont icon-xinxi_huaban"></i>
				</div>
				<div class="nav_item flex_column_center" :title="username">
					<div v-if="header" class="icon_header">
						<img :src="header" :alt="username">
					</div>
					<i class="iconfont icon-wode" v-else></i>
				</div>
			</div>
			
			
			<div class="gn_header_right">
				<div class="gn_nav gn_login" v-if="!username">
					<ul class="gn_nav_list clearfix">
						<li>
							<router-link to="/login">
								<span>{{ $t('login.login') }}</span>
							</router-link>
						</li>
						<li class="S_line1"></li>
						<li>
							<router-link to="/register">
								<span>{{ $t('login.register') }}</span>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="gn_nav gn_login" v-else>
					<ul class="gn_nav_list clearfix">
						<!-- <li class="username">
							{{ username }}
						</li>
						<li class="user_header">
							<img :src="header" alt="">
						</li> -->
						<li>
							<a-button @click="logOut">{{ $t('login.logout') }}</a-button>
						</li>
					</ul>
				</div>
				
				<div class="lang_btn">
					<langBtn />
				</div>
				<div class="lang_btn">
					<ModeBtn />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, Ref, computed } from 'vue'
	import langBtn from '@/components/public/switchLangBtn.vue'
	import ModeBtn from '@/components/public/modeBtn.vue'
	import { useStore } from '@/store'
	import { message } from 'ant-design-vue'
	message.config({
		top: '300px'
	})
	export default defineComponent({
		name: 'NavHeader',
		setup() {
			const store = useStore()
			const username = computed(() => store.state.userModule.userInfo.username)
			const header = computed(() => store.state.userModule.userInfo.header)
			let seachValue: Ref<string> = ref('');
			

			// 输入框变化
			const changeSearch = ():void => {
				console.log(seachValue.value)
			}
			// 退出登录
			const logOut = () => {
				store.dispatch('userModule/logout')
				.then(() => {
					message.success("退出成功")
				})
			}
			
			return {
				seachValue,
				changeSearch,
				username,
				header,
				logOut
			}
		},
		components: {
			langBtn,
			ModeBtn
		}
	})
</script>

<style lang="less" scoped>
	@import './navHeader.less';
</style>
