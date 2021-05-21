<template>
	<div class="register">
		<div class="register_nav"><LangBtn /></div>	
		
		<div class="register_box">
			<h3 class="register_title">{{ $t('login.register') }}</h3>
			<a-upload v-model:file-list="fileList" name="avatar" list-type="picture-card" class="avatar-uploader"
				:show-upload-list="false" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				:before-upload="beforeUpload" @change="handleChange">
				<img v-if="imageUrl" :src="imageUrl" alt="avatar" />
				<div v-else>
					<loading-outlined v-if="loading"></loading-outlined>
					<plus-outlined v-else></plus-outlined>
					<div class="ant-upload-text">{{ $t("upload_header") }}</div>
				</div>
			</a-upload>

			<a-form :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed">
				<a-form-item>
					<a-input v-model:value="formState.user" :placeholder="$t('login.username')">
						<template #prefix>
							<UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-input v-model:value="formState.password" type="password" :placeholder="$t('login.password')">
						<template #prefix>
							<LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-input v-model:value="formState.repassword" type="password" :placeholder="$t('login.repassword')">
						<template #prefix>
							<LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-button type="primary" html-type="submit" class="login_btn"
						:disabled="disabled">
						{{ $t('login.login') }}
					</a-button>
				</a-form-item>
			</a-form>
		</div>
		<slideLock @handleSlide="handleSlide" v-if="showSlide"></slideLock>
	</div>
</template>
<script lang="ts">
	import {
		UserOutlined,
		LockOutlined,
		PlusOutlined,
		LoadingOutlined
	} from '@ant-design/icons-vue';

	import {
		defineComponent, computed
	} from 'vue';
	import slideLock from '@/components/slideLock/index.vue'
	import {
		fileList,
		loading,
		imageUrl,
		handleChange,
		beforeUpload,
		isSlideSuccess,
		showSlide,
		formState,
		handleFinish,
		handleFinishFailed
	} from './hooks/index'
	import LangBtn from '@/components/switchLangBtn/index.vue'
	import { reqRegister } from '@/api'
	import { setToken } from '@/utils/cookies'
	export default defineComponent({
		components: {
			LoadingOutlined,
			PlusOutlined,
			UserOutlined,
			LockOutlined,
			slideLock,
			LangBtn
		},
		setup() {
			const disabled = computed(() => {
				return (formState.user && formState.password && imageUrl.value && formState.repassword) ? false : true
			})
			
			
			// 滑动事件
			const handleSlide = (flag: boolean): void => {
				isSlideSuccess.value = flag
				showSlide.value = false
				reqRegister({
					header: imageUrl.value,
					username: formState.user,
					password: formState.password,
					repassword: formState.repassword
				})
				.then(res => {
					console.log(res)
					setToken(res.data.token)
				})
				.catch(err => {
					console.log(err)
				})
				
			}

			return {
				disabled,
				handleSlide,
				fileList,
				loading,
				imageUrl,
				handleChange,
				beforeUpload,
				isSlideSuccess,
				showSlide,
				formState,
				handleFinish,
				handleFinishFailed
			};
		},
	});
</script>
<style scoped lang="less">
	@import './register.less';
</style>

<style lang="less">
	.register .ant-upload.ant-upload-select-picture-card{
		margin: auto!important;
		float: none;
		border-radius: 50%;
	}
</style>