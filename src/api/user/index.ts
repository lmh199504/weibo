
import { AxiosResponse } from 'axios'
import { LoginData, RegisterData, GetUserInfoData, GetCode } from './type'
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

export const reqGetUserInfo = (data: GetUserInfoData): Promise<AxiosResponse> => {
    return instance({
        url: '/user/userInfo',
        method: 'post',
        data 
    })
}
// 获取验证码
export const reqGetRegisterCode = (data: GetCode): Promise<AxiosResponse> => instance({
	url: '/user/sendCode',
	method: 'post',
	data 
})