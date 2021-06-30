// 判断浏览器函数
export const isMobile = ():boolean => {
    if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true; // 移动端
    }else{
        return false; // PC端
    }
}


export const formatVideoTime = (timenum: number): string => {
    const time = Math.floor(timenum)
    const minute =  Math.floor(time / 60)
    const second = (time - minute * 60) % 60
    return addZero(minute)+ ':' + addZero(second)
}

export const addZero = (number: number): string|number => {
   return number > 9 ? number : '0' + number
}

export const Screen = (element: HTMLElement): void => {
    if (element.requestFullscreen) {
        // eslint-disable-next-line
        element.requestFullscreen();
        // eslint-disable-next-line
    } else if ((element as any).mozRequestFullScreen) {
        // eslint-disable-next-line
        (element as any).mozRequestFullScreen();
        // eslint-disable-next-line
    } else if ((element as any).msRequestFullscreen) {
        // eslint-disable-next-line
        (element as any).msRequestFullscreen();
        // eslint-disable-next-line
    } else if ((element as any).oRequestFullscreen) {
        // eslint-disable-next-line
        (element as any).oRequestFullscreen();
        // eslint-disable-next-line
    } else if ((element as any).webkitRequestFullscreen) {
        // eslint-disable-next-line
        (element as any).webkitRequestFullScreen();
    }  else {
        console.log("不能全屏")
    }
}