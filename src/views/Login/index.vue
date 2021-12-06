<template>
	<div class="login">
		<div class="login_nav">
			<LangBtn />
		</div>
		<div class="login_box">
			<h3 class="login_title">{{ $t('login.login') }}</h3>
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
					<a-button type="primary" html-type="submit" class="login_btn"
						:disabled="formState.user === '' || formState.password === ''">
						{{ $t('login.login') }}
					</a-button>
				</a-form-item>
			</a-form>
			
			<span class="to_register_btn" @click="toRegister">{{ $t('login.noaccount') }}{{ $t('login.register') }}</span>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		UserOutlined,
		LockOutlined
	} from "@ant-design/icons-vue";

	import {
		ValidateErrorEntity
	} from "ant-design-vue/es/form/interface";
	import {
		defineComponent,
		reactive,
		UnwrapRef,
		Ref,
		ref
	} from "vue";
	interface FormState {
		user: string;
		password: string;
	}

	import LangBtn from '@/components/switchLangBtn/index.vue'
	import {
		useStore
	} from "@/store";
	import { useRouter } from 'vue-router'
	export default defineComponent({
		name: "Login",
		setup() {
			const router = useRouter()
			const store = useStore();
			const formState: UnwrapRef < FormState > = reactive({
				user: "",
				password: "",
			});

			// 加载中
			const loading = ref < boolean > (false);
			//
			const handleFinish = (values: FormState) => {
				console.log(values, formState);
				loading.value = true;
				store
					.dispatch("userModule/login", {
						email: formState.user,
						password: formState.password,
					})
					.then(() => {
						loading.value = false;
						router.replace('/')
					})
					.catch(() => {
						loading.value = false;
					});
			};
			const handleFinishFailed = (errors: ValidateErrorEntity < FormState > ) => {
				console.log(errors);
			};
			let isSlideSuccess: Ref < boolean > = ref(false);
			let showSlide: Ref < boolean > = ref(false);

			
			
			// 去登录
			
			const toRegister = () => router.push('/register')
			
			return {
				isSlideSuccess,
				showSlide,
				formState,
				handleFinish,
				handleFinishFailed,
				loading,
				toRegister
			};
		},
		components: {
			UserOutlined,
			LockOutlined,
			LangBtn
		},
	});
</script>

<style scoped lang="less">
	@import "./login.less";
</style>
