<template>
	<div class="register">
		<div class="register_nav"><LangBtn /></div>	
		
		<div class="register_box">
			<h3 class="register_title">{{ $t('login.register') }}</h3>
			<a-upload v-model:file-list="fileList" list-type="picture-card" class="avatar-uploader"
				:show-upload-list="false" action="/api/uploadimg"
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
						{{ $t('login.register') }}
					</a-button>
				</a-form-item>
			</a-form>
			<span class="to_register_btn" @click="toLogin">已有账号？{{ $t('login.login') }}</span>
		</div>
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

	import {
		fileList,
		loading,
		imageUrl,
		handleChange,
		beforeUpload,
		isSlideSuccess,
		showSlide,
		formState,
		handleFinishFailed,

	} from './hooks/index'
	import LangBtn from '@/components/switchLangBtn/index.vue'
	import {
		useStore
	} from "@/store";
	import { useRouter } from 'vue-router'
	interface FormState {
		user: string;
		password: string;
		repassword: string;
	}
	export default defineComponent({
		components: {
			LoadingOutlined,
			PlusOutlined,
			UserOutlined,
			LockOutlined,
			LangBtn
		},
		setup() {
			const disabled = computed(() => {
				return (formState.user && formState.password && imageUrl.value && formState.repassword) ? false : true
			})
			const store = useStore()
			const router = useRouter()

			const handleFinish = (values: FormState):void => {
				console.log(values, formState);
				store.dispatch('userModule/register', {
					header: imageUrl.value,
					username: formState.user,
					password: formState.password,
					repassword: formState.repassword
				})
				.then(() => {
					router.replace('/') 
				})
			};
			
			const toLogin = () => {
				router.push('/login')
			}
			return {
				disabled,
				fileList,
				loading,
				imageUrl,
				handleChange,
				beforeUpload,
				isSlideSuccess,
				showSlide,
				formState,
				handleFinish,
				handleFinishFailed,
				toLogin
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