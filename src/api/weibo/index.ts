import instance from '@/utils/axios'

export const reqGetEmoticon = () :Promise<AxiosResponse> => {
    return instance({
        url: '/weibo/getemoticon',
        method: 'get',
    })
}