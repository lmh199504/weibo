import instance from '@/utils/axios'
import { AxiosResponse } from 'axios'
import { unReadData } from './type'
export const reqGetEmoticon = () :Promise<AxiosResponse> => {
    return instance({
        url: '/weibo/getemoticon',
        method: 'get',
    })
}

// 获取全部微博 getUnreadFriendstimeline
export const reqGetUnreadFriends = (data: unReadData) :Promise<AxiosResponse> => {
	return instance({
		url: '/weibo/getUnreadFriendstimeline',
		method: 'get',
		params: data
	})
}

