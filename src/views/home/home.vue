<template>
	<div v-if="!isLogin">
		<unLoginHome />
	</div>
	<div v-else>
		<LoginHome />
	</div>
</template>

<script lang="ts">
	import {
		defineComponent,
		computed
	} from 'vue'
	import {
		useStore
	} from '@/store'
	import unLoginHome from '@/components/unLoginHome/unLoginHome.vue'
	import LoginHome from '@/components/loginHome/loginHome.vue'
	export default defineComponent({
		data() {
			return {

			}
		},
		setup() {
			const store = useStore()
			const isLogin = computed(() => store.state.userModule.userInfo.username)
			return {
				isLogin
			}
		},
		components: {
			unLoginHome,
			LoginHome
		}
	})
</script>
