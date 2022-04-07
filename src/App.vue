<template>
	<div id="app">
		<div id="nav" :class="navShow ? 'navOn' : 'navOff'">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/parents">Parents</router-link>
		</div>
		<router-view />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				top: "",
				navShow: true
			}
		},
		// 获取浏览器滚轮
		mounted() {
			window.addEventListener('scroll', () => {
				this.top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
			})
		},
		// 监听top值的变化
		watch: {
			top(newValue, oldValue) {
				// 等新值大于100的时候再做变化（优化一下）
				if (newValue > 100) {
					if (newValue > oldValue) {
						this.navShow = false
						console.log('向下100+滚动')
					} else {
						this.navShow = true
						console.log('向上100+滚动')
					}
				}
			}
		}
	}
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		border: 1px solid;
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}

	.navOn {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		transition: all 0.2s ease-in-out 0.2s;
		transform: translateZ(0);
	}

	.navOff {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		transition: all 0.2s ease-in-out 0.2s;
		transform: translate3d(0, -100%, 0);
	}
</style>
