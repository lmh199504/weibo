<template>
	<div class="dynamicHead">
		<div class="left">
			<div class="img_wrapper" @click="goUser">
				<img :src="itemData.user.profile_image_url" >
			</div>
		</div>
		<div class="right">
			<div class="username" @click="goUser">{{ itemData.user.screen_name }}</div>
			<div class="time">{{ itemData.created_at }} {{ itemData.source ? '来自' + itemData.source : '' }}</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import { useRouter } from 'vue-router'
	export default defineComponent({
		props: {
			itemData: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		setup(props) {
			const router = useRouter()
			console.log(props.itemData)
			const goUser = () => {
				router.push({
					path: "/user/" + props.itemData.user.id
				})
			}
			return {
				goUser
			}
		}
	})
</script>

<style scoped lang="less">
	.dynamicHead{
		display: flex;
		margin-bottom: 10px;
		.left{
			width: 60px;
			.img_wrapper{
				width: 50px;
				height: 50px;
				border-radius: 50%;
				overflow: hidden;
				cursor: pointer;
				img{
					width: 100%;
					height: auto;
					min-height: 100%;
				}
			}
		}
		.right{
			padding: 5px 0;
			.username{
				color: #333;
				font-weight: bold;
				font-size: 12px;
				cursor: pointer;
				&:hover{
					color: var(--primaryColor);
				}
			}
			.time{
				color: #939393;
				font-size: 12px;
				margin-top: 3px;
			}
		}
	}
</style>
