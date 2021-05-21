// 判断浏览器函数
export const isMobile = ():boolean => {
 if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
  return true; // 移动端
 }else{
  return false; // PC端
 }
}