<!-- 当 v-for 遍历同时使用 v-if 判断的时候可以考虑 computed -->
<template>
  <div class="comp1">
    <div v-for="item in activeUsers" :key="item.id">
      <div>姓名:{{ item.name }} —— 年龄:{{ item.age }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comp1",
  data() {
    return {
      nameArr: [
        {
          id: "1001",
          name: "小李",
          age: "18",
        },
        {
          id: "1002",
          name: "小赵",
          age: "15",
        },
        {
          id: "1003",
          name: "小钱",
          age: "16",
        },
        {
          id: "1004",
          name: "老孙",
          age: "88",
        },
      ],
    };
  },
  computed: {
    activeUsers() {
      return this.nameArr.filter((user) => {
        return user.age >= 18;
      });
    },
    /**
     * 获取数组最后一位
     */
    testFun() {
      let arr = [0, 1, 2, 3, 4, 5];
      const last = arr.slice(-1)[0];
      return last
    },
  },
  methods:{
	  /**
	   * 判断手机是否处于暗黑模式
	   * */
	 isDarkMode(){
	 	const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
	 	console.log('isDark',isDark);
	 } 
  },
  mounted() {
	this.isDarkMode()
  }
};
</script>

<style>
</style>