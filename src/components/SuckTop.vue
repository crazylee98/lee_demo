<!-- 
	滑动显隐taber
 -->

<template>
  <div class="suckTop_box">
      <div id = "nav_bar" :class = "navShow ? 'navOn' : 'navOff'">
			<div class="taber">全部|分类1|分类2</div>
		</div>
  </div>
</template>

<script>
export default {
    name:"SuckTop",
    data() {
        return {
            top:'',
            navShow:false
        }
    },
    // 获取浏览器滚轮
	mounted() {
		window.addEventListener('scroll', () => {
			this.top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
		})
	},

	// 监听top值的变化
	watch:{
		top(newValue,oldValue){
			// 等新值大于100的时候再做变化（优化一下）
			if(newValue > 100){
				if(newValue > oldValue){
					this.navShow = false
					console.log('向下100+滚动')
				}else{
					this.navShow = true
					console.log('向上100+滚动')
				}
			}
		}
	}
}
</script>

<style lang="less" scoped>
.suckTop_box{
    .navOn{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		transition: all 0.2s ease-in-out 0.2s;
		transform: translateZ(0);
	}
	.navOff{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		transition: all 0.2s ease-in-out 0.2s;
		transform: translate3d(0,-100%,0);
	}
}
</style>