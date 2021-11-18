<template>
	<div class="register">
		<div class="register_nav">
			<LangBtn />
		</div>

		<div class="register_box">
			<h3 class="register_title">{{ $t('login.register') }}</h3>


			<a-form :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed">
				
				
				<a-form-item>
					<a-input v-model:value="formState.email" :placeholder="$t('login.mail')">
						<template #prefix>
							<MailOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input>
				</a-form-item>
				
				<a-form-item>
					<a-input v-model:value="formState.code" :placeholder="$t('login.VerificationCode')">
						<template #prefix>
							<InsuranceOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
						<template #suffix>
							<a-button @click="getCode(60)" :loading="loadingCode" v-if="!isLock">获取验证码</a-button>
							<a-button disabled v-else>{{ seconds }}s</a-button>
						</template>
					</a-input>
				</a-form-item>
				
				<a-form-item>
					<a-input v-model:value="formState.username" :placeholder="$t('login.username')">
						<template #prefix>
							<UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input>
				</a-form-item>
				
				<a-form-item>
					<a-input v-model:value="formState.password" :type="isPass ? 'password' : 'text'" :placeholder="$t('login.password')">
						<template #prefix>
							<LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
						<template #suffix>
							<icon-font type="icon-yanjing" class="icon" @click="isPass = true" v-if="!isPass"/>
							<icon-font type="icon-biyan" class="icon" @click="isPass = false" v-else/>
						</template>
					</a-input>
				</a-form-item>

				<a-form-item>
					<a-button type="primary" html-type="submit" class="login_btn" :disabled="disabled">
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
		InsuranceOutlined,
		UserOutlined,
		LockOutlined,
		MailOutlined
		// PlusOutlined,
		// LoadingOutlined
	} from '@ant-design/icons-vue';
	
	import {
		defineComponent,
		computed,
		Ref,
		ref
	} from 'vue';

	import {
		formState,
		handleFinishFailed,
		FormState,
		getCode,
		loadingCode,
		isLock,
		seconds,
		initTimer
	} from './hooks/formData'
	import LangBtn from '@/components/switchLangBtn/index.vue'
	import {
		useStore
	} from "@/store";
	import {
		useRouter
	} from 'vue-router'

	
	export default defineComponent({
		components: {
			// LoadingOutlined,
			// PlusOutlined,
			UserOutlined,
			LockOutlined,
			LangBtn,
			MailOutlined,
			InsuranceOutlined
		},

		setup() {
			const disabled = computed(() => {
				return (formState.username && formState.password && formState.code) ?
					false : true
			})
			const store = useStore()
			const router = useRouter()

			const handleFinish = (values: FormState): void => {
				console.log(values, formState);
				store.dispatch('userModule/register', {
						email: formState.email,
						username: formState.username,
						password: formState.password,
						code: formState.code
					})
					.then(() => {
						router.replace('/')
					})
			};

			const toLogin = () => {
				router.push('/login')
			}
			initTimer()
			const isPass: Ref < boolean> = ref(true)
		
			return {
				disabled,
				toLogin,
				handleFinish,
				isPass,
				
				getCode,
				loadingCode,
				isLock,
				formState,
				handleFinishFailed,
				seconds,
				initTimer
			};
		}
	});
</script>
<style scoped lang="less">
	@import './register.less';
</style>

<style lang="less">
	.register .ant-upload.ant-upload-select-picture-card {
		margin: auto !important;
		float: none;
		border-radius: 50%;
	}
</style>
