
import Cookies from 'js-cookie' 

export const setToken = (token: string): void => {
    Cookies.set('user_token', token)
}

export const getToken = ():string => {
    return Cookies.get('user_token')
} 

export const removeToken = ():void => {
    Cookies.remove('user_token'); // 删除失败
}