<template>
	<div>
		<h2>TouchFun</h2>
		<div class="touchBox" @touchstart='touchSatrtFun' @touchmove='touchMoveFun'></div>
		<hr >
	</div>
</template>

<script>
	export default {
		name: "TouchFun",
		data() {
			return {
				startX: 0
			}
		},
		components: {
		},
		methods: {
			//touchstart事件  
			touchSatrtFun(e) {
				//evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
				let touch = e.touches[0]; //获取第一个触点  
				this.startX = Number(touch.pageX); //页面触点X坐标  
				this.startY = Number(touch.pageY); //页面触点Y坐标  
			},
			//touchmove事件 
			touchMoveFun(e) {
				//evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
				let touch = e.touches[0]; //获取第一个触点  
				let x = Number(touch.pageX); //页面触点X坐标  
				let y = Number(touch.pageY); //页面触点Y坐标  
				let text = 'TouchMove事件触发：（' + x + ', ' + y + '）';
				//判断滑动方向  
				if (this.startX - x < 0) {
					console.log('右滑');
				}
				if (this.startX - x > 0) {
					console.log('左滑');
				}
				if (y - this.startY != 0) {
					//上下滑动  
					console.log('上下滑');
				}
			}
		}

	}
</script>

<style scoped lang="less">

</style>
