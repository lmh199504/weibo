<template>
	<div class="modeBtn flex_column_center" @click="switchMode">
		<!-- <icon-font type="icon-baitian" v-if="mode == 'dark'" /> -->
		<!-- <icon-font type="icon-yejian" v-else/> -->
		<i class="iconfont icon-baitian" v-if="mode == dark"></i>
		<i class="iconfont icon-yejian" v-else></i>
	</div>
</template>

<script lang="ts">
	import { useStore } from '@/store'
	import { defineComponent, computed } from 'vue'
	export default defineComponent({
		name: "ModeBtn",
		setup() {
			const store = useStore()
			const switchMode = (): void => {
				if(mode.value == 'daily') {
					store.commit('settingModule/SET_MODE', 'dark')
				} else {
					store.commit('settingModule/SET_MODE', 'daily')
				}
			}
			const mode = computed(() => store.state.settingModule.mode)
			return {
				switchMode,
				mode
			};
		}
	})
</script>

<style scoped lang="less">
	.modeBtn{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: @iconBgColor;
		margin-left: 20px;
		cursor: pointer;
		.iconfont {
			color: @iconColor;
		}
	}
</style>
