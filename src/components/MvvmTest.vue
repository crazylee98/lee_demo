<template>
  <div class="mvvmTest">
    <h3>mvvm解析</h3>
    <h4>Object.fefineProperty</h4>
    <!-- Object.defineProperty()的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性 -->
    <button @click="objFun">按钮</button>
  </div>
</template>

<script>
export default {
  name: "MvvmTest",
  data() {
    return {
      obj: {},
    };
  },
  methods: {
    objFun() {
      const objs = {};
      Object.defineProperty(objs, "property1", {
        value: 123,//值
        writable: true,//是否可写
      });
      objs.property1 = 321;//不可写时error
      console.log("=======",objs ,objs.property1);
    },
  },
};
</script>

<style lang="less" scoped>
.mvvmTest {
    border: 1px solid;
}
</style>