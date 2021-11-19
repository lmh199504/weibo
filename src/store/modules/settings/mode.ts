
/**
* 自定义主题方案
**/
export const modeType = {
	daily: {
		baseColor:'#FFF',
		activeColor:'#4f94fa',
		fontColor:'#333',
		bgColor: '#FFFFFF',
		iconColor: "#434a54",
		iconBgColor: '#e5e6eb',
		titleColor: "#333333",
		hoverBg: "#f2f2f2",
		primaryColor: '#ff8200'
	},
	dark: {
		baseColor:'#FFF',
		activeColor:'#4f94fa',
		fontColor:'#333',
		bgColor: "#181c27",
		iconColor: "#d3d3d3",
		iconBgColor: '#3e3e48',
		titleColor: "#999999",
		hoverBg: "#25252c",
		primaryColor: '#ea8011'
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

