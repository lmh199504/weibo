<template>
	<div >
		<DynamicItem v-for="(item,index) in list" :key="index" :itemData="item"/>
		
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
	import { reqGetUnreadFriends } from '@/api/weibo'
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
			
			
			const getData = (type='init') => {
				loading.value = true
				reqGetUnreadFriends({ count: 10, max_id: max_id })
				.then(res => {
					// console.log(res)
					if(type == 'init') {
						list.value = res.data.statuses
					} else {
						// eslint-disable-next-line
						res.data.statuses.forEach((item: any) => {
							list.value.push(item)
						})
					}
					max_id = res.data.max_id
					loading.value = false
					
				})
				.catch(() => {
					loading.value = false
				})
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
				loading
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
</style>