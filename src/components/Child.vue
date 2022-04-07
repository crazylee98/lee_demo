<!-- Vue父子组件双向绑定传值的实现方法  -->
<template>
	<div class="child_box">
		<h3>child</h3>
		<div class="val">
			{{ msg }}
		</div>
		<div class="val">
			{{ msg2 }}
		</div>
		<button type="button" @click="setMsg()">点击</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props:{
			msg:{
				type:[String,Number],
				dafault:""
			},
			msg2:{
				type:[String,Number],
				dafault:""
			}
		},
		methods:{
			setMsg(){
				console.log('dd' )
				let  newMsg = 100
				let  newMsg2 = 200
				// update为固定字段，通过冒号连接双向绑定的msg，将some传递给父组件的v-model绑定的变量
				// TODO 重点
				this.$emit("update:msg",newMsg)
				this.$emit("update:msg2",newMsg2)
			}
		}
	}
</script>

<style>
</style>
