<template>
	<div v-if="!isLogin">
		{{ isLogin }}
		<unLoginHome />
	</div>
	<div v-else>
		
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
	export default defineComponent({
		data() {
			return {

			}
		},
		setup() {
			const store = useStore()
			const isLogin = computed(() => store.state.userModule.username)
			console.log(isLogin)
			return {
				isLogin
			}
		},
		components: {
			unLoginHome
		}
	})
</script>
