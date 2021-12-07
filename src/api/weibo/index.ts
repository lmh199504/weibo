import instance from '@/utils/axios'
import { AxiosResponse } from 'axios'
export const reqGetEmoticon = () :Promise<AxiosResponse> => {
    return instance({
        url: '/weibo/getemoticon',
        method: 'get',
    })
}