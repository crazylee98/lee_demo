<template>
  <div class="home">
    <div class="placeholder_box"></div>
    <TouchFun msg="Welcome to Your Vue.js App" />
    <hr />
    <Comp1 />
    <hr />
    <!-- v-touch npm试用 -->
    <v-touch
      @swipeleft="swipeLeft"
      @swiperight="swipeRight"
      @swipeup="swipeUp"
      @swipedown="swipeDown"
      :swipe-options="{ direction: 'horizontal' }"
      class="btn"
    >
    </v-touch>
    <hr />
    <MvvmTest></MvvmTest>
    <hr />
    <Drawer></Drawer>
    <hr />
    <!-- <SuckTop></SuckTop> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TouchFun from "@/components/TouchFun.vue";
import Comp1 from "@/components/Comp1.vue";
import MvvmTest from "@/components/MvvmTest.vue";
import Drawer from "../components/Drawer.vue";
import SuckTop from "../components/SuckTop.vue";

export default {
  name: "Home",
  components: {
    TouchFun,
    Comp1,
    MvvmTest,
    Drawer,
    SuckTop,
  },
  data() {
    return {};
  },
  methods: {
    // 左滑
    swipeLeft() {
      alert("左滑了");
      // 页面跳转或其它操作
    },
    // 右滑
    swipeRight() {
      alert("右滑了");
      // 页面跳转或其它操作
    },
    // 上滑
    swipeUp() {
      alert("上滑");
    },
    swipeDown() {
      alert("下滑");
    },
  },
};
</script>

<style less="less" scoped>
.placeholder_box {
  width: 100%;
  height: 60px;
}
.btn {
  width: 100px;
  height: 50px;
  background: deepskyblue;
}
</style>
