
<template>
    <div class="dynamicFooter clearfix">
       <!-- <div class="left">
            <div class="userheader">
                <img src="https://reactlmh.oss-cn-beijing.aliyuncs.com/heaher/23073179092.jpg" alt="">
            </div>
            <div class="username">我是一个用户名</div>
            <div class="publish_time">今天 13:30</div>
        </div> -->

        <div class="right">
            <div class="tool_item">
                <icon-font type="icon-zhuanfa" class="icon" />
                <span>{{ itemData.reposts_count }}</span>
            </div>
            <div class="tool_item">
                <icon-font type="icon-pinglun" class="icon" />
                <span>{{ itemData.comments_count }}</span>
            </div>
            <div class="tool_item">
                <icon-font type="icon-dianzan" class="icon"/>
                <span>{{ itemData.attitudes_count }}</span>
            </div>
            
        </div>
    </div>
</template>    

<script lang="ts">

    import { defineComponent }  from 'vue'
    export default defineComponent({
		props: {
			itemData: {
				type: Object,
				default: () => {
					return {}
				}
			}
		}
    })
</script>

<style lang="less" scoped>
    @import url('./dynamicFooter.less');
</style>