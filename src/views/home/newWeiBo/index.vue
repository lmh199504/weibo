<template>
	<div>
		<div v-if="loading && list.length == 0">
			<div v-for="i in 10" :key="i" class="skeleton">
				<a-skeleton avatar active  :paragraph="{ rows: 4 }" />
			</div>
		</div>
		
		<DynamicItem v-for="(item,index) in list" :key="index" :itemData="item"/>
		
		<div class="empty" v-if="!loading && list.length == 0">
			<a-empty />
		</div>
		
		<div v-if="loading" class="loading">
			<a-spin tip="Loading...">
				<div class="spin-content">
				</div>
			</a-spin>
		</div>
	</div>
</template>

<script lang="ts">
	import { Ref, ref, onMounted } from 'vue'
	import { reqGetfriendstimeline } from '@/api/weibo'
	import { defineComponent } from 'vue'
	import DynamicItem from '@/components/dynamicItem/dynamicItem/dynamicItem.vue'
	import $bus from '@/libs/bus'
	export default defineComponent({
		data() {
			return {}
		},
		setup() {
			let max_id: string | undefined = undefined;
			// eslint-disable-next-line 
			const list: Ref<Array<any>> = ref([])
			const loading: Ref<boolean> = ref(false)
			const active: Ref<number> = ref(1)
			
			const getData =  async(type='init') => {
				loading.value = true
				let res = null
				try{
					res = await reqGetfriendstimeline({ count: 10, max_id: max_id, list_id: 110002992035983, fid: 110002992035983 })
					
					if(type == 'init') {
						list.value = res?.data?.statuses
					} else {
						// eslint-disable-next-line
						res?.data?.statuses.forEach((item: any) => {
							list.value.push(item)
						})
					}
					max_id = res?.data?.max_id
					loading.value = false
				}catch(e){
					loading.value = false
				}
			}
			
			getData()
			
			onMounted(() => {
				$bus.on('scrollEnd', () => {
					if(loading.value ) {
						return
					}
					getData('more')
				})
			})
			
			return {
				list,
				loading,
				active
			}
		},
		components: {
			DynamicItem
		}
	})
</script>

<style scoped lang="less">
	.spin-content {
		padding: 30px;
	}
	.tab_list{
		display: flex;
		background: #FFFFFF;
		margin-top: 10px;
		padding: 10px;
		.tab_item{
			width: 60px;
			height: 30px;
			border-radius: 15px;
			line-height: 30px;
			text-align: center;
			cursor: pointer;
			&:hover{
				color: var(--primaryColor);
				background: #fff2e5;
			}
		}
		.tab_item_active{
			color: var(--primaryColor);
			font-weight: bold;
		}
	}
	.skeleton{
		margin-top: 10px;
		background: #FFFFFF;
		border-radius: 5px;
		padding: 10px;
	}
	.empty{
		margin-top: 10px;
		background: #FFFFFF;
		border-radius: 5px;
		padding: 10px;
		min-height: 500px;
		padding-top: 200px;
	}
</style>