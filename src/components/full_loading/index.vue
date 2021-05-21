
<template>
    <a-spin :spinning="loading" :tip="$t('loading')">
        <div class="full_loading">
            
        </div>
    </a-spin>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
    setup() {
        const store = useStore()
        const loading = computed(() => store.state.settingModule.loading)
        
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
</style>
