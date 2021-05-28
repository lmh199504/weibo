<template>
	<div class="login">
		<div class="login_nav">
			<LangBtn />
		</div>
		<div class="login_box">
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
			<span class="to_register_btn" @click="toRegister">{{ $t('login.register') }}</span>
		</div>
		<slideLock @handleSlide="handleSlide" v-if="showSlide"></slideLock>
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
	import slideLock from "@/components/slideLock/index.vue";
	import LangBtn from '@/components/switchLangBtn/index.vue'
	import {
		useStore
	} from "@/store";
	import { useRouter } from 'vue-router'
	export default defineComponent({
		name: "Login",
		setup() {
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
				showSlide.value = true;
			};
			const handleFinishFailed = (errors: ValidateErrorEntity < FormState > ) => {
				console.log(errors);
			};
			let isSlideSuccess: Ref < boolean > = ref(false);
			let showSlide: Ref < boolean > = ref(false);
			const handleSlide = (flag: boolean) => {
				isSlideSuccess.value = flag;
				showSlide.value = false;
				loading.value = true;
				store
					.dispatch("userModule/login", {
						username: formState.user,
						password: formState.password,
					})
					.then(() => {
						loading.value = false;
					})
					.catch(() => {
						loading.value;
					});
			};
			
			
			// 去登录
			const router = useRouter()
			const toRegister = () => router.push('/register')
			
			return {
				isSlideSuccess,
				showSlide,
				formState,
				handleFinish,
				handleFinishFailed,
				handleSlide,
				loading,
				toRegister
			};
		},
		components: {
			UserOutlined,
			LockOutlined,
			slideLock,
			LangBtn
		},
	});
</script>

<style scoped lang="less">
	@import "./login.less";
</style>
