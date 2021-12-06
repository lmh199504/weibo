<template>
	<div class="releaseBox">
		<a-textarea v-model:value="releaseText" placeholder="有什么新鲜事要分享给大家" :rows="3" />
		<div class="footer_tool">
			<div class="tool_left">

				<a-dropdown :trigger="['click']">
					<div class="left_item flex_column_center">
						<icon-font type="icon-biaoqing"></icon-font>
					</div>
					<template #overlay>
						<a-menu>
							<a-menu-item key="0">
								<a href="http://www.alipay.com/">1st menu item</a>
							</a-menu-item>
							<a-menu-item key="1">
								<a href="http://www.taobao.com/">2nd menu item</a>
							</a-menu-item>
							<a-menu-divider />
							<a-menu-item key="3">
								3rd menu item
							</a-menu-item>
						</a-menu>
					</template>

				</a-dropdown>

				<div class="left_item flex_column_center">
					<icon-font type="icon-biaoqing"></icon-font>
				</div>
				<div class="left_item flex_column_center">
					<icon-font type="icon-tupian"></icon-font>
				</div>
				<div class="left_item flex_column_center">
					<icon-font type="icon-shipin1"></icon-font>
				</div>
				<div class="left_item flex_column_center">
					<icon-font type="icon-wxbdingwei"></icon-font>
				</div>

			</div>
			<div class="tool_right"></div>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		defineComponent,
		Ref,
		ref
	} from 'vue'
	import { reqGetEmoticon } from '@/api/weibo/index'
	export default defineComponent({
		name: "ReleaseBox",
		setup() {
			let releaseText: Ref < string > = ref('')
			return {
				releaseText
			}
		}
	})
</script>

<style scoped lang="less">
	.releaseBox {
		padding: 20px 20px 10px;
		background: #FFFFFF;
		border-radius: 5px;

		.footer_tool {
			display: flex;
			margin-top: 5px;

			.tool_left {
				display: flex;

				.left_item {
					font-size: 18px;
					height: 35px;
					width: 35px;
					border-radius: 50%;
					cursor: pointer;

					&:hover {
						color: #ff8140;
						background: #fff2e5;
					}
				}

			}
		}
	}
</style>
