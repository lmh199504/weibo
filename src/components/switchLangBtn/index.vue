
<template>
    <div>
        <a-button @click="handleChange('zh')" v-if="lang == 'en'">中文</a-button>
		<a-button @click="handleChange('en')" v-else>English</a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { setSessionLocal } from '@/common/lang'
import { useStore } from '@/store'
export default defineComponent({
    setup() {
        const store = useStore()
        const handleChange = (val:string): void =>  {
            setSessionLocal(val)
        }
        const lang = computed(() => store.state.settingModule.lang)
        return {
            lang,
            handleChange
        }
    },
})
</script>

<style lang="less" scoped>

</style>