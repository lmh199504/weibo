
import { AxiosResponse } from 'axios'
import { LoginData, RegisterData, GetCode } from './type'
import instance from '@/utils/axios'

export const reqLogin = (data: LoginData) :Promise<AxiosResponse> => {
    return instance({
        url: '/user/login',
        method: 'post',
        data
    })
}

export const reqRegister = (data: RegisterData) :Promise<AxiosResponse> => {
    return instance({
        url: '/user/register',
        method: 'post',
        data
    }) 
}

export const reqGetUserInfo = (): Promise<AxiosResponse> => {
    return instance({
        url: '/user/userInfo',
        method: 'get',
    })
}
// 获取验证码
export const reqGetRegisterCode = (data: GetCode): Promise<AxiosResponse> => instance({
	url: '/user/sendCode',
	method: 'post',
	data 
})