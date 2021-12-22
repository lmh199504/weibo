import instance from '@/utils/axios'
import { AxiosResponse } from 'axios'
import { unReadData, friendData } from './type'
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

// 获取好友动态
export const reqGetfriendstimeline = (data: friendData): Promise<AxiosResponse> => {
	return instance({
		url: '/weibo/getfriendstimeline',
		method: 'get',
		params: data
	})
}