
/**
* 自定义主题方案
**/
export const modeType = {
	daily: {
		baseColor:'#FFF',
		activeColor:'#4f94fa',
		fontColor:'#333',
		bgColor: '#FFFFFF',
		iconColor: "#434a54"
	},
	dark: {
		baseColor:'#FFF',
		activeColor:'#4f94fa',
		fontColor:'#333',
		bgColor: "#181c27",
		iconColor: "#FFFFFF"
	}
}

/**
* 切换主题修改页面样式
**/

// eslint-disable-next-line
export const changeStyle= (obj: any): void => {
	for(const key in obj){
		document.getElementsByTagName('body')[0].style.setProperty(`--${key}`, obj[key]);
	}
}

