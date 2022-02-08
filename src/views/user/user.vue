<template>
	<div class="loginHome">
		<div class="WB_miniblog">
			<div class="WB_frame">
				<div class="left">
					<LeftMenu />
				</div>
				<div class="main">
					<div class="wbpro-pos">
						<div class="woo-picture-main ProfileHeader_pic_2Coeq">
							<img class="woo-picture-img" :src="info.userInfo.cover_image_phone">
							<div class="woo-picture-cover"></div>
						</div>

					</div>
				</div>
				<div class="right">

				</div>
			</div>
		</div>

		<!-- 回到顶部 -->
		<a-back-top />
	</div>
</template>

<script>
	import {
		defineComponent,
		reactive
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	import {
		reqGetUserInfo
	} from '@/api/weibo'
	import LeftMenu from '@/components/leftMenu/index.vue'
	export default defineComponent({
		setup() {
			const router = useRouter()
			const {
				id
			} = router.currentRoute.value.params

			const info = reactive({
				userInfo: {},
				tabList: []
			})

			// 获取信息
			const getInfo = () => {
				reqGetUserInfo({
						uid: id
					})
					.then(res => {
						info.userInfo = res.data.data.user
						info.tabList = res.data.data.tabList
					})
			}
			getInfo()
			return {
				info
			}
		},
		components: {
			LeftMenu
		}
	})
</script>

<style scoped lang="less">
	.loginHome {
		background-color: #f5f5f5;
		background-repeat: repeat-x;
		background-position: center 0;
		min-height: calc(100vh - 60px);
	}

	.WB_miniblog {
		min-height: calc(100vh - 60px);
	}

	.WB_frame {
		display: flex;
		justify-content: space-between;
		width: 1000px;
		// background-color: rgba(70,149,194,0.3);
	}

	.left {
		width: 150px;
		// position: fixed;
		position: relative;
	}

	.main {
		width: 600px;
	}

	.right {
		width: 230px;
	}


	.wbpro-pos {
		position: relative;

		.woo-picture-main {
			display: inline-block;
			position: relative;
			width: 100%;

			&::before {
				content: "";
				display: block;
				width: 100%;
			}
		}

		.ProfileHeader_pic_2Coeq {
			width: calc(100% + 2px);
			height: 256px;
			margin: -1px -1px 0;
			border-top-left-radius: 4px;
			border-top-left-radius: var(--w-border-radius);
			border-top-right-radius: 4px;
			border-top-right-radius: var(--w-border-radius);
			cursor: pointer;
		}

		.woo-picture-img {
			border-radius: inherit;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			object-fit: cover;
		}

		.woo-picture-cover {
			border: 1px solid rgba(0, 0, 0, .05);
			border: 1px solid var(--w-image-border);
			border-radius: inherit;
			bottom: 0;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			left: 0;
			pointer-events: none;
			position: absolute;
			right: 0;
			top: 0;
		}
	}
</style>
