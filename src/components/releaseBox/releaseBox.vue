<template>
	<div class="releaseBox">
		<a-textarea v-model:value="releaseText" placeholder="有什么新鲜事要分享给大家" :rows="3" />

		<!-- 上传图片 -->
		<div class="up_load">
			<a-upload v-model:file-list="fileList" v-if="fileList.length!=0" action="/api/user/uploadFile"
				accept="image/*" :headers="{
					authorization: token
				}" :disabled="disableImg" list-type="picture-card" @preview="handlePreview"
				@change="handleChange" :before-upload="beforeUploadImg">
				<div v-if="fileList.length < 9">
					<plus-outlined />
					<div class="ant-upload-text">{{ $t('upload') }}</div>
				</div>
			</a-upload>
		</div>

		<!-- 上传视频 -->
		<div class="up_load">
			<a-upload v-model:file-list="videoList" v-if="videoList.length!=0" action="/api/user/uploadFile"
				accept="video/*" :headers="{
					authorization: token
				}" :disabled="disableVideo" list-type="picture-card" @preview="handPrevVideo"
				@change="videoChange" :before-upload="beforeUploadVideo">
				<div v-if="fileList.length < 9">
					<plus-outlined />
					<div class="ant-upload-text">{{ $t('upload') }}</div>
				</div>
			</a-upload>
		</div>

		<div class="footer_tool">
			<div class="tool_left">

				<a-popover :trigger="['click']" v-model="emoActive" placement="bottomRight">
					<div class="left_item flex_column_center" @click="emoActive=true">
						<icon-font type="icon-biaoqing"></icon-font>
					</div>
					<template #content>
						<div class="emoticon">
							<a-tabs>
								<a-tab-pane :key="index" v-for="(item,index) in emoList">
									<template #tab>
										<div class="icon_wrapper flex_column_center">
											<img :src="item.url" :title="item.key">
										</div>
									</template>
									<a-row :gutter='[5,5]'>
										<a-col :span="2" v-for="(e_item,e_index) in item.value" :key="e_index">
											<div class="icon_wrapper flex_column_center" @click="tabEmo(e_item)">
												<img :src="e_item.icon" :title="e_item.value">
											</div>
										</a-col>
									</a-row>
								</a-tab-pane>
							</a-tabs>
						</div>
					</template>
				</a-popover>

				<a-upload v-model:file-list="fileList" action="/api/user/uploadFile" accept="image/*"
					:disabled="disableImg" @change="handleChange"
					:before-upload="beforeUploadImg">
					<div class="left_item flex_column_center">
						<icon-font type="icon-tupian"></icon-font>
					</div>
				</a-upload>
				<a-upload v-model:file-list="videoList" action="/api/user/uploadFile" accept="video/*"
					:disabled="disableVideo" @change="videoChange"
					:before-upload="beforeUploadVideo">
					<div class="left_item flex_column_center">
						<icon-font type="icon-shipin1"></icon-font>
					</div>
				</a-upload>
				<div class="left_item flex_column_center">
					<icon-font type="icon-wxbdingwei"></icon-font>
				</div>
			</div>
			<div class="tool_right">
				<a-button type="primary" shape="round" :disabled="!releaseText">发送</a-button>
			</div>
		</div>


		<a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
			<img alt="example" style="width: 100%" :src="previewImage" />
		</a-modal>

		<a-modal :visible="preVideoModal" :footer="null" @cancel="handCanVideo">
			<video alt="example" style="width: 100%" :src="previewVideo" />
		</a-modal>
	</div>
</template>

<script lang="ts">
	import {
		PlusOutlined
	} from '@ant-design/icons-vue';
	import {
		defineComponent,
		Ref,
		ref,
		reactive,
		computed
	} from 'vue'
	import {
		reqGetEmoticon
	} from '@/api/weibo/index'
	import * as UpImg from './hooks/upImg'
	import * as UpVideo from './hooks/upVideo'
	import {
		useStore
	} from '@/store'
	export default defineComponent({
		name: "ReleaseBox",
		data() {
			return {
				emoActive: false,
			}
		},
		components: {
			PlusOutlined
		},
		setup() {
			const store = useStore()
			let releaseText: Ref < string > = ref('')
			// eslint-disable-next-line 
			let emoList = reactive < Array < any >> ([])

			const token = computed(() => store.state.userModule.token)
			const disableImg = computed(() =>  UpVideo.videoList.value.length !=0 || UpImg.fileList.value.length >= 9 )
			const disableVideo = computed(() =>  UpImg.fileList.value.length !=0 || UpVideo.videoList.value.length >= 9 )
			
			reqGetEmoticon()
				.then(res => {
					// eslint-disable-next-line
					res.data.data.emoticon_format.forEach((item: any) => {
						emoList.push(item)
					})
				})
			return {
				releaseText,
				emoList,
				token,
				...UpImg,
				...UpVideo,
				disableImg,
				disableVideo
			}
		},
		methods: {
			// eslint-disable-next-line
			tabEmo(item: any) {
				this.releaseText += item.value
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
			justify-content: space-between;
			.tool_left {
				display: flex;

				/deep/ .ant-upload-list {
					display: none;
				}

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

	.emoticon {
		user-select: none;
		width: 490px;
		background: #FFFFFF;
		border-radius: 10px;
		min-height: 330px;
		// overflow: auto;
		padding: 5px;

		// box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
		.icon_wrapper {
			cursor: pointer;
			border-radius: 50%;
			width: 40px;
			height: 40px;

			&:hover {
				background: #fff2e5;
			}

			img {
				width: 24px;
			}
		}

		/deep/ .ant-tabs-nav .ant-tabs-tab {
			margin: 0;
			padding: 0;
		}
	}

	.up_load {
		margin-top: 10px;
	}
</style>
