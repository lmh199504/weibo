
<template>
    <div class="videoDynamic">
        <div class="left">
            <videoPlayer />
        </div>
        <div class="right">
            <div class="content_text">之前C罗在新闻发布会上把可乐挪走的行为话题度爆棚。现在C罗被淘汰出局，可乐的“报复”机会来了！</div>
            <dynamicFooter />
        </div>
    </div>
</template>

<script lang="ts">
    import dynamicFooter from '@/components/dynamicFooter/dynamicFooter.vue'
    import videoPlayer from '@/components/videoPlayer/videoPlayer.vue'
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'videoDynamic',
        components: {
            dynamicFooter,
            videoPlayer
        }
    })
</script>  

<style lang="less" scoped>
    @import url('./videoDynamic.less');
</style>