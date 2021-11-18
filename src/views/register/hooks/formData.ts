
import { message } from 'ant-design-vue'
import { reqGetRegisterCode } from '@/api/user'
import Cookies from 'js-cookie'
import {
	ValidateErrorEntity
} from 'ant-design-vue/es/form/interface';
import {
	reactive,
	UnwrapRef,
	Ref,
	ref
} from 'vue';
export interface FormState {
	username: string;
	password: string;
	code: string,
	email: string
}


export const formState: UnwrapRef < FormState > = reactive({
	username: '',
	password: '',
	code: '',
	email: ''
});

export const handleFinishFailed = (errors: ValidateErrorEntity < FormState > ):void => {
	console.log(errors);
};


// 验证码相关
export const loadingCode: Ref < boolean > = ref(false)

let timer = 0
// eslint-disable-next-line
export const getCode = async (startTime = 60) => {
	try{
		if(!formState.email) {
			message.warning("请输入邮箱")
		} else {
			const data = {
				email: formState.email
			}
			Cookies.set('time_code', new Date().getTime() + startTime * 1000)
			if(startTime === 60) {
				loadingCode.value = true
				await reqGetRegisterCode(data)
				loadingCode.value = false
				message.success("验证码发送成功")
			} 
			
			isLock.value = true
			timer = setInterval(() => {
				seconds.value -= 1 
				if(seconds.value <=0) {
					clearInterval(timer)
					isLock.value = false
					seconds.value = 60
				}
			}, 1000)
		}
	}catch(err) {
		console.log(err)
		loadingCode.value = false
		Cookies.remove('time_code')
	}
}

export const initTimer = (): void => {
	const local_time = Cookies.get('time_code')
	const time = Math.floor((local_time - new Date().getTime()) / 1000)
	if (local_time && time > 0) {
		getCode(time)
	}
}
// 是否锁定
export const isLock: Ref <boolean> = ref(false)
export const seconds: Ref <number> = ref(60)
