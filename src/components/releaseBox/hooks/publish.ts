import { Ref, ref } from 'vue'
import { reqReleaseDynamics } from '@/api/dynamics'
import { fileList, FileItem } from './upImg'
import { videoList } from './upVideo'
import store from '@/store'

export const releaseText: Ref < string > = ref('')
export const loading: Ref< boolean > = ref(false)

export const sendDynamics = (): void => {
	
	const pic: Array<string> = []
	fileList.value.forEach((item: FileItem) => {
		pic.push(item.response as string)
	})
	
	let video: string | undefined = ''
	
	if(videoList.value.length !=0) {
		video = videoList.value[0].url
	}
	
	
	const data  = {
		text: releaseText.value,
		pic: pic,
		video: video
	}
	store.commit('settingModule/SET_LOADING', true)
	loading.value =  true
	reqReleaseDynamics(data)
	.then(res => {
		loading.value = false
		console.log(res)
		
		store.commit('settingModule/SET_LOADING', false)
	})
	.catch((err) => {
		loading.value = false
		console.log(err)
		store.commit('settingModule/SET_LOADING', false)
	})
}