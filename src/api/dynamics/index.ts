
import { AxiosResponse } from 'axios'
import instance from '@/utils/axios'
import { ReleaseData } from './type'

// 发布动态
export const reqReleaseDynamics = (data: ReleaseData): Promise<AxiosResponse> => instance({
	url: "/user/releaseDynamics",
	method: "POST",
	data
})