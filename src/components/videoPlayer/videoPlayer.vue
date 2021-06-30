
<template>
	<div class="videoPlayer">
		<video ref="videoplayer" preload class="videoMedia" src="https://reactlmh.oss-cn-beijing.aliyuncs.com/uploadVideo/lmh_1611991420931.mp4" poster="https://reactlmh.oss-cn-beijing.aliyuncs.com/images/e573ad80-d651-11ea-9086-73bc466dfa3b.png">
		</video>
		<div class="poster" v-if="isInit">
			<img class="posterimg" src="https://reactlmh.oss-cn-beijing.aliyuncs.com/images/e573ad80-d651-11ea-9086-73bc466dfa3b.png" alt="">
			<div class="playIcon">
				<icon-font type="icon-bofang" class="icon" @click="playVideo"/>
			</div>
		</div>
		<div class="tool" v-if="!isInit">
			<div v-if="!isPlay">
				<icon-font type="icon-bofang" class="icon" @click="playVideo"/>
			</div>
			<div v-else>
				<icon-font type="icon-zantingtingzhi" class="icon" @click="pauseVideo"/>
			</div>
			<div class="volume_wrapper">
				<a-slider v-model:value="volume" @change="onChange" />
			</div>
			<div>
				<icon-font type="icon-shengyinjingyin" class="icon"/>
			</div>
			<div class="videoTime">
				{{ filterCurrentTime }}/{{ filterDuration }}
			</div>
			
			<div>
				<icon-font type="icon-fullScreen" class="icon" @click="fullScreen"/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, onMounted, computed, watch } from 'vue'
	import { formatVideoTime, Screen, createRandomId } from '@/utils/index'
	import { useStore } from '@/store'
	
	export default defineComponent({
		name: "videoPlayer",
		setup() {
			const store = useStore()
			const uid = createRandomId()
			// 时长
			const duration = ref<number>(0)
			// 当前时间
			const currentTime = ref<number>(0)

			// 声音
			const volume = ref<number>(30)
			const onChange = (value: number):void => {
				// console.log(value)
				// eslint-disable-next-line
				(videoplayer.value as any)['volume'] = value / 100
			}
			// 是否播放中
			const isPlay = ref<boolean>(false)
			// 是否第一次播放
			const isInit = ref<boolean>(true)
			// 视频元素
			const videoplayer = ref<HTMLElement>()

			onMounted(() => {
				// console.log(videoplayer.value)
				videoplayer.value?.addEventListener('timeupdate', (/*time: Event*/) => {
					// eslint-disable-next-line
					currentTime.value = (videoplayer.value as any)['currentTime']
				})
				videoplayer.value?.addEventListener('loadedmetadata', () => {
					// eslint-disable-next-line
					duration.value = (videoplayer.value as any)['duration'];
					// eslint-disable-next-line
					(videoplayer.value as any)['volume'] = volume.value / 100
				})
			})
			// 播放视频
			const playVideo = () => {
				// eslint-disable-next-line
				(videoplayer.value as any)['play']()
				isInit.value = false
				isPlay.value = true
				store.commit('videoModule/SET_VIDEO_ID', uid)
			}
			// 暂停播放
			const pauseVideo = () => {
				// eslint-disable-next-line
				(videoplayer.value as any)['pause']()
				isPlay.value = false
			}
			// 全屏
			const fullScreen = () => {
				Screen(videoplayer.value as HTMLElement)
			}

			// 过滤时间
			const filterDuration = computed(() => {
				return formatVideoTime(duration.value)
			})
			// 过滤当前时间
			const filterCurrentTime = computed(() => {
				return formatVideoTime(currentTime.value)
			})
			
			var currentId = computed(() => {
				return store.state.videoModule.videoId
			})

			watch(currentId, (newValue) => {
				if(newValue != uid) {
					pauseVideo()
					isInit.value = true
				}
			})

			return {
				volume,
				onChange,
				isPlay,
				playVideo,
				videoplayer,
				pauseVideo,
				fullScreen,
				isInit,
				filterDuration,
				filterCurrentTime
			}
		},
		methods: {

		}
	})
</script>

<style lang="less" scoped>
	@import url('./videoPlayer.less');
</style>
<style lang="less">
.videoPlayer{
	.volume_wrapper{
		.ant-slider{
			padding: 0;
		}
	}
}

</style>