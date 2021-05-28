
<template>
    
        <div class="full_loading" v-show="loading">
            <a-spin :spinning="loading" :tip="$t('loading')" class="loading">
				
			</a-spin>
        </div>
    
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
    setup() {
        const store = useStore()
        const loading = computed(() => store.state.settingModule.loading)
        return {
			loading
		}
    },
})
</script>
<style lang="less" scoped>
    .full_loading{
        position: fixed;
        z-index: 10000;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5); 
    }
	.loading{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
