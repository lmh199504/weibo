import instance from '@/utils/axios'
import { AxiosResponse } from 'axios'
import { unReadData, friendData, groudData, userInfoData } from './type'
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
// 获取超话等等 group 动态 
export const reqGetgroupstimeline = (data: groudData): Promise<AxiosResponse> => {
	return instance({
		url: '/weibo/getgroupstimeline',
		method: 'get',
		params: data
	})
}
// 获取分组
export const reqGetAllGroups = (): Promise<AxiosResponse> => {
	return instance({
		url: "/weibo/getAllGroups",
		method: 'get',
	})
}
// 获取微博用户信息
export const reqGetUserInfo = (data: userInfoData): Promise<AxiosResponse> => {
	return instance({
		url: "/weibo/getWeiBoInfo",
		method: 'get',
		params: data
	})
}