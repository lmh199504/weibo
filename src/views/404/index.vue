<template>
	<div class="not_found">
		<div class="">
			<img src="../../assets/images/404/404.jpg" alt="">
		</div>
		<a-button @click="toIndex" class="goHomeBtn">返回首页</a-button>
	</div>
</template>

<script>
	import { defineComponent } from 'vue'
	import { useRouter } from 'vue-router'
	export default defineComponent({
		setup() {
			const router = useRouter()
			const toIndex = () => router.push('/')
			return {
				toIndex
			}
		}
	})
</script>

<style scoped lang="less">
	.not_found{
		padding: 60px;
		text-align: center;
	}
	.goHomeBtn{
		margin-top: 30px;
	}
	.not_found img {
		max-width: 100%;
	}
	@media screen and (max-width:380px) {
		.not_found {
			padding: 15px;
		}
	}
</style>
