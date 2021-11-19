<template>
	<div class="modeBtn">
		<icon-font type="icon-baitian" v-if="mode == 'dark'" @click="switchMode('daily')"/>
		<icon-font type="icon-yejian" @click="switchMode('dark')" v-else/>
	</div>
</template>

<script lang="ts">
	import { useStore } from '@/store'
	import { defineComponent, computed } from 'vue'
	export default defineComponent({
		name: "ModeBtn",
		setup() {
			const store = useStore()
			const switchMode = (mode :string): void => {
				store.commit('settingModule/SET_MODE', mode)
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
		margin-left: 20px;
		.icon{
			color: @iconColor!important;
		}
	}
</style>
