<template>
  <div class="parents_box">
    <div class="placeholder_box"></div>

    <h2>Parents</h2>
    <!-- 重点sync -->
    <Child :msg.sync="parentMsg" :msg2.sync="parentMsg2"></Child>
	<hr >
	<!-- <SwiperCellDemo></SwiperCellDemo> -->
  </div>
</template>

<script>
import Child from "../components/Child.vue";
import SwiperCellDemo from "../components/SwiperCellDemo.vue"

export default {
  name: "Parents",
  data() {
    return {
      parentMsg: "111",
      parentMsg2: "222",
    };
  },
  components: {
    Child,
    SwiperCellDemo
  },
  watch: {
    parentMsg(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    parentMsg2(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
};
</script>

<style scoped>
.placeholder_box {
  width: 100%;
  height: 60px;
}
</style>
