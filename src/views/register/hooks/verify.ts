
import { ref, Ref } from 'vue'

export let msg: Ref <string> = ref('')

export const text: Ref <string> = ref('向右滑动->') 

export const accuracy: Ref <number> = ref(1)
// eslint-disable-next-line
export const slideblock = ref<HTMLElement>()

export const onSuccess = (times: number): void => {
	msg = ref(`login success, 耗时${(times / 1000).toFixed(1)}s`)
}
export const onFail = (): void => {
	console.log('验证不通过');
	msg = ref('')
}
export const onRefresh = (): void => {
	console.log('点击了刷新小图标');
	msg = ref('')
}
export const onFulfilled = (): void => {
	console.log('刷新成功啦！');
}
export const onAgain = (): void => {
	console.log('检测到非人为操作的哦！');
	msg = ref('try again');
	// 刷新
	// eslint-disable-next-line
	// slideblock && slideblock['reset']();
	console.log(slideblock)
}
export const handleClick = (): void => {
	// eslint-disable-next-line
	// slideblock && slideblock['reset']();
	console.log(slideblock)
}