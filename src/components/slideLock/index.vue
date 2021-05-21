<template>
	<section class="code_bg">
		<div class="slide-box">
			<div class="slide-img-block">
				<div class="slide-img-div">
					<div class="slide-img-nopadding">
						<img class="slide-img" id="slideImg" :src="img">
						<div class="slide-block" id="slideBlock"></div>
						<div class="slide-box-shadow" id="cutBlock"></div>
					</div>
				</div>
			</div>
			<div class="scroll-background  slide-img-hint-info" id="slideHintInfo" style="height: 0px;">
				<div class="slide-img-hint">
					<div class="scroll-background slide-icon" id="slideIcon"></div>
					<div class="slide-text">
						<span class="slide-text-type greenColor" id="slideType">验证通过:</span>
						<span class="slide-text-content" id="slideContent">用时0.4s</span>
					</div>
				</div>
			</div>
			<i class="iconfont icon-refresh" @click="resImg"></i>
			<!-- 滑块 -->
			<div class="slideBox" ref="slideBox">
				<div v-if="isMobile" class='slide' @touchstart="touchStart($event)" @touchmove="touchMove($event)"
					@touchend="touchEnd($event)" :style="{'left':moveToLeft+'px'}" ref="slide">
					<i class="iconfont "></i>
				</div>
				<div v-else class='slide' :style="{'left':moveToLeft+'px'}" ref="slide"
					@mousedown="mouseDown" >
					<i class="iconfont "></i>
				</div>
				<div class="slideBg" :style="{'width':moveToLeft+'px'}"></div>
				<div class="textBg" v-show="moveToLeft>0">拖动左边滑块完成上方拼图</div>
				<span class="default" v-show="moveToLeft===0">拖动左边滑块完成上方拼图</span>
			</div>
		</div>
	</section>
</template>

<script>
	import {
		isMobile
	} from '@/utils/index.ts'
	import {
		defineComponent,
	} from 'vue'
	export default defineComponent({
		name: "slideBox",
		data() {
			return {
				msg: "滑动",
				moveToLeft: 0, //滑动距离
				starX: 0, //初始距离
				slideBoxWidth: 0,
				slideWidth: 0,
				resultX: "",
				slideBlock: "",
				cutBlock: "",
				imgWidth: "",
				imgHeight: "",
				slideIcon: "", // 图标
				slideType: "", // 失败
				slideContent: "", //正文
				slideHintInfo: "", //弹出
				isSuccess: true,
				startTamp: "", //开始时间
				endTamp: "", //结束时间
				timer: "", // 用时解开
				img: "", // 图片
				imgList: [
					'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/weibo/01.jpg',
					'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/weibo/02.jpg',
					'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/weibo/01.jpg',
					'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/weibo/02.jpg',
					'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/weibo/01.jpg',
					'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/weibo/02.jpg',
					'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/weibo/01.jpg',
					'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/weibo/02.jpg',
					'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/weibo/02.jpg'
				],
				isMobile: isMobile()
			};
		},
		mounted() {
			this.slideBoxWidth = this.$refs.slideBox.clientWidth;
			this.slideWidth = this.$refs.slide.clientWidth;
			this.cutBlock = document.getElementById("cutBlock"); // 裁剪区域
			this.slideBlock = document.getElementById("slideBlock"); // 裁剪的图片
			this.imgWidth = document.getElementById("slideImg").offsetWidth; // 图片宽
			this.imgHeight = document.getElementById("slideImg").offsetHeight; // 图片高
			this.slideIcon = document.getElementById("slideIcon"); // 正确、失败的图标
			this.slideType = document.getElementById("slideType"); // 正确、失败
			this.slideContent = document.getElementById("slideContent"); // 正确、失败的正文
			this.slideHintInfo = document.getElementById("slideHintInfo"); // 弹出
			this.resImg();
		},
		methods: {
			touchStart(e) {
				console.log("zzzz:" + e.targetTouches[0].pageX);
				let starX = e.targetTouches[0].pageX;
				this.starX = starX;
				this.startTamp = new Date().valueOf();
				if (this.isSuccess) {
					this.cutImg();
				}
			},
			touchMove(e) {

				console.log("yyyy:" + e.targetTouches[0].pageX);

				let ToLeft = e.targetTouches[0].pageX - this.starX; //变化后的坐标减去初始坐标
				let slideBoxW = Math.floor(this.slideBoxWidth - this.slideWidth - 1); //计算大盒子宽度
				if (ToLeft < 0) {
					ToLeft = 0; //滑块不能超出大盒子左边
					this.slideBlock.style.left = "0px";
				}
				if (ToLeft >= 0 && ToLeft <= slideBoxW) {
					this.slideBlock.style.left = ToLeft + "px";
				}

				if (ToLeft > slideBoxW) {
					ToLeft = slideBoxW; //滑块不能超出大盒子右边
				}
				this.moveToLeft = ToLeft;
				console.log("离开的" + this.resultX);
			},
			touchEnd() {
				let ToLeft = this.moveToLeft;
				if (this.resultX > ToLeft - 4 && this.resultX < ToLeft + 4) {
					this.isSuccess = true;
					this.endTamp = new Date().valueOf();
					this.timer = ((this.endTamp - this.startTamp) / 1000).toFixed(1);
					// 裁剪图片(拼图的一块)
					this.slideBlock.style.opacity = "0";
					// _this.slideBlock.style.transition = "opacity 0.6s";
					// 裁剪的区域(黑黑的那一块)
					this.cutBlock.style.opacity = "0";
					this.cutBlock.style.transition = "opacity 0.6s";
					// 正确弹出的图标
					this.slideType.className = "slide-text-type greenColor";
					this.slideType.innerHTML = "验证通过:";
					this.slideContent.innerHTML = "用时" + this.timer + "s";
					setTimeout(() => {
						this.cutBlock.style.display = "none";
						this.slideBlock.style.left = "0px";
						//_this.reToNewImg();

					}, 600);
					//_this.options.success && _this.options.success();
				} else {
					this.isSuccess = false;
					// 设置样式
					// 裁剪图片(拼图的一块)
					this.slideBlock.style.left = "0px";
					// 错误弹出的图标

					this.slideType.className = "slide-text-type redColor";
					this.slideType.innerHTML = "验证失败:";
					this.slideContent.innerHTML = "拖动滑块将悬浮图像正确拼合";
					this.slideBlock.style.left = "0px";
					this.resImg();
				}
				// 设置样式
				this.slideHintInfo.style.height = "22px";
				setTimeout(() => {
					this.slideHintInfo.style.height = "0px";
				}, 1300);
				//离开的时候回到初始位置
				this.moveToLeft = 0;
			},
			cutImg() {
				this.cutBlock.style.display = "block";
				var cutWidth = this.cutBlock.offsetWidth; // 裁剪区域宽
				var cutHeight = this.cutBlock.offsetHeight; // 裁剪区域高
				// left
				this.resultX = Math.floor(
					Math.random() * (this.imgWidth - cutWidth * 2 - 4) + cutWidth
				);
				// top
				var cutTop = Math.floor(
					Math.random() * (this.imgHeight - cutHeight * 2) + cutHeight
				);
				// 设置样式
				this.cutBlock.style.cssText =
					"top:" +
					cutTop +
					"px;" +
					"left:" +
					this.resultX +
					"px; display: block;";
				this.slideBlock.style.top = cutTop + "px";
				this.slideBlock.style.backgroundPosition =
					"-" + this.resultX + "px -" + cutTop + "px";
				this.slideBlock.style.opacity = "1";
			},
			resImg() {
				this.isSuccess = true;
				let newImg = this.imgList[Math.round(Math.random() * 8)];
				this.img = newImg;
				this.slideBlock.style.backgroundImage = "url(" + newImg + ")";
				this.slideBlock.style.opacity = "0";
				this.cutBlock.style.display = "none";
			},

			mouseDown(e) {
				let starX = e.pageX;
				this.starX = starX;
				this.startTamp = new Date().valueOf();
				if (this.isSuccess) {
					this.cutImg();
				}
				
				document.addEventListener('mousemove', this.mouseMove)
				document.addEventListener('mouseup',this.mouseUp)
			},
			mouseMove(e) {

				let ToLeft = e.pageX - this.starX; //变化后的坐标减去初始坐标
				let slideBoxW = Math.floor(this.slideBoxWidth - this.slideWidth - 1); //计算大盒子宽度
				if (ToLeft < 0) {
					ToLeft = 0; //滑块不能超出大盒子左边
					this.slideBlock.style.left = "0px";
				}
				if (ToLeft >= 0 && ToLeft <= slideBoxW) {
					this.slideBlock.style.left = ToLeft + "px";
				}
				
				if (ToLeft > slideBoxW) {
					ToLeft = slideBoxW; //滑块不能超出大盒子右边
				}
				this.moveToLeft = ToLeft;
			},
			mouseUp() {

				let ToLeft = this.moveToLeft;
				if (this.resultX > ToLeft - 4 && this.resultX < ToLeft + 4) {
					this.isSuccess = true;
					this.endTamp = new Date().valueOf();
					this.timer = ((this.endTamp - this.startTamp) / 1000).toFixed(1);
					// 裁剪图片(拼图的一块)
					this.slideBlock.style.opacity = "0";
					// _this.slideBlock.style.transition = "opacity 0.6s";
					// 裁剪的区域(黑黑的那一块)
					this.cutBlock.style.opacity = "0";
					this.cutBlock.style.transition = "opacity 0.6s";
					// 正确弹出的图标
					this.slideType.className = "slide-text-type greenColor";
					this.slideType.innerHTML = "验证通过:";
					this.slideContent.innerHTML = "用时" + this.timer + "s";
					
					this.$emit('handleSlide', true)
					setTimeout(() => {
						this.cutBlock.style.display = "none";
						this.slideBlock.style.left = "0px";
						//_this.reToNewImg();
				
					}, 600);
					//_this.options.success && _this.options.success();
				} else {
					this.isSuccess = false;
					// 设置样式
					// 裁剪图片(拼图的一块)
					this.slideBlock.style.left = "0px";
					// 错误弹出的图标
				
					this.slideType.className = "slide-text-type redColor";
					this.slideType.innerHTML = "验证失败:";
					this.slideContent.innerHTML = "拖动滑块将悬浮图像正确拼合";
					this.slideBlock.style.left = "0px";
					this.resImg();
				}
				// 设置样式
				this.slideHintInfo.style.height = "22px";
				setTimeout(() => {
					this.slideHintInfo.style.height = "0px";
				}, 1300);
				//离开的时候回到初始位置
				this.moveToLeft = 0;
				document.removeEventListener('mousemove', this.mouseMove)
				document.removeEventListener('mouseup', this.mouseUp)
			}

		}
	});
</script>

<style lang="less" scoped>
	// 上面的滑块
	.code_bg {
		user-select: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 20;

		// 图片
		.slide-box {
			display: block;
			position: relative;
			top: 25%;
			background: #fff;
			padding: 20px;
			width: 400px;
			left: 50%;
			transform: translateX(-50%);

			.slide-btn {
				height: 44px;
				width: 44px;
				background-position: 0 -84px;
				cursor: pointer;
				display: block;
				position: absolute;
				left: 0;
				top: -9px;
				-moz-box-shadow: none;
				box-shadow: none;
				border-radius: 13px;
				z-index: 399;
			}

			.icon-refresh {
				display: block;
				font-size: 0.4rem;
				margin-left: 6%;
				margin-top: 1%;
				color: #d0caec;
			}

			.slide-img-div {
				width: 100%;
				height: 200px;
				// padding: 0 5%;
				position: relative;
				border-left: 1px solid #fff;
				border-right: 1px solid #fff;

				img {
					width: 100%;
					height: 100%;
				}

				.slide-box-shadow {
					display: none;
					position: absolute;
					width: 40px;
					height: 40px;
					border-radius: 10px;
					background-color: rgba(0, 0, 0, 0.3);
					box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8) inset;
				}

				.slide-block {
					opacity: 0;
					position: absolute;
					top: 0;
					left: 2px;
					width: 40px;
					height: 40px;
					border-radius: 10px;
					background-repeat: no-repeat;
					background-attachment: scroll;
					border: 1px solid rgba(255, 255, 0, 0.8);
					background-size: 100% 3rem;
					box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4),
						0 0 10px 0 rgba(90, 90, 90, 0.4);
					box-sizing: border-box;
					z-index: 10;
				}

				.slide-img-nopadding {
					position: relative;
					width: 100%;
					height: 100%;
				}
			}

			.slide-icon {
				float: left;
				height: 22px;
				width: 26px;
			}

			.slide-img-hint {
				-webkit-font-smoothing: subpixel-antialiased;
				font-size: 12px !important;
				line-height: 22px !important;
				margin: 0 auto;
				position: relative;
			}

			.slide-text {
				text-align: left !important;
				color: #4b3f33;
			}

			.slide-img-hint-info {
				height: 22px;
				width: 260px;
				background-position: 0 -674px;
				height: 0;
				overflow: hidden;
				position: absolute;
				bottom: 1px;
				transition: height 0.3s;
				z-index: 11;
			}

			.redColor {
				color: red;
			}

			.greenColor {
				color: green;
			}
		}

		// 滑块
		.slideBox {
			z-index: 20;
			height: 50px;
			border: 1px solid #d5d3e2;
			line-height: 50px;
			background: #d0caec;
			color: #fff;
			font-size: 16px;
			position: relative;

			.slide {
				height: 100%;
				width: 50px;
				background: #fff;
				position: absolute;
				top: 0px;
				left: 0;
				cursor: pointer;

				i {
					width: 0;
					height: 0;
					border-width: 10px;
					border-style: dashed dashed dashed solid;
					border-color: transparent transparent transparent #d0caec;
					position: absolute;
					top: 50%;
					left: 50%;
					margin-left: 5px;
					transform: translate(-50%, -50%);
				}
			}

			.slideBg {
				height: 50px;
				background: linear-gradient(to top right,
						#cddc39 0%,
						#8bc34a 25%,
						#ffeb3b 100%);
			}

			.textBg {
				height: 0.89rem;
				width: 100%;
				text-align: center;
				position: absolute;
				top: 0;
			}

			.default {
				height: 0.89rem;
				position: absolute;
				top: 0;
				left: 15%;
				width: 70%;
				text-align: center;
			}
		}
	}
</style>
