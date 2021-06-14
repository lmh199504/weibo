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
			
			<div class="gn_position">
				<div class="gn_nav">
					<ul class="gn_nav_list clearfix">
						<li>
							<router-link to="/index">
								<HomeOutlined />
								<span>{{ $t("home") }}</span>
							</router-link>
						</li>
						<li>
							<router-link to="/game">
								<AppstoreAddOutlined />
								<span>{{ $t('game') }}</span>
							</router-link>
						</li>
						<li>
							<router-link to="/video">
								<VideoCameraOutlined />
								<span>{{ $t('video') }}</span>
							</router-link>
							
						</li>
						<li>
							<router-link to="/find">
								<CompassOutlined />
								<span>{{ $t('find') }}</span>
							</router-link>
							
						</li>
					</ul>
				</div>
				<div class="gn_nav gn_login">
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
				<div class="lang_btn">
					<langBtn />
				</div>
			</div>
			
		</div>
		
		
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, Ref } from 'vue'
	import { SearchOutlined, HomeOutlined, VideoCameraOutlined,CompassOutlined, AppstoreAddOutlined } from '@ant-design/icons-vue'
	import langBtn from '@/components/switchLangBtn/index.vue'
	export default defineComponent({
		name: 'NavHeader',
		setup() {
			let seachValue: Ref<string> = ref('');
			

			// 输入框变化
			const changeSearch = ():void => {
				console.log(seachValue.value)
			}
			
			return {
				seachValue,
				changeSearch
			}
		},
		components: {
			SearchOutlined,
			HomeOutlined,
			VideoCameraOutlined,
			CompassOutlined, 
			AppstoreAddOutlined,
			langBtn
		}
	})
</script>

<style lang="less" scoped>
	@import './navHeader.less';
</style>
