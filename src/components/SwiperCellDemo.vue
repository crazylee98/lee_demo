<!-- 
	左滑到最后一个显示加载更多demo
 -->
<template>
	<div class="swiperCellDemo">
	  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
	    <van-swipe-item v-for="item in bannerList"
	      :key="item.id">
	      <img :src="item.img" alt="">
	    </van-swipe-item>
	  </van-swipe>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Swipe,
		SwipeItem
	} from 'vant';

	Vue.use(Swipe);
	Vue.use(SwipeItem);

	export default {
		name: "SwiperCellDemo",
		data () {
		  return {
		    bannerList: []
		  }
		},
		mounted() {

		},
		created () {
		  this.bannerList = [
		    { id: 1, img: '/static/home/banner/banner1.jpg' },
		    { id: 2, img: '/static/home/banner/banner2.jpg' },
		    { id: 3, img: '/static/home/banner/banner3.jpg' }
		  ]
		},
		methods: {

		},
		
	}
</script>


<style lang="less" scoped>
	
</style>







 


