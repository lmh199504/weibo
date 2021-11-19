
<template>
    <div class="modeBtn flex_column_center">
		<i class="iconfont icon-zhongwen" @click="handleChange('zh')" v-if="lang == 'en'"></i>
		<i class="iconfont icon-yingwen" @click="handleChange('en')" v-else></i>
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