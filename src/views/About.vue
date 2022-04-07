<template>
  <div class="about">
    <div class="placeholder_box"></div>

    <h1>富文本测试</h1>
    <div class="msg_box">
      <div v-html="msg"></div>
      <hr>
      <div v-html="msg2"></div>
      <hr>
      <div v-html="imgHtml"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:"<ol><li>对的</li><li><i>错的</i></li><li><strong>半对半错&nbsp;</strong></li></ol><h2><strong>打的 打的的 的的 &nbsp;</strong></h2>",
      imgHtml:'<img src="https://ftp.bmp.ovh/imgs/2021/12/4e574ab9f95c2698.png"  />',
      msg2:'<p><img alt="图片" src="https://ftp.bmp.ovh/imgs/2021/12/5e18918157fa7b2f.png" style="height:221px; width:336px" /></p><ol><li>对的</li><li>错的</li><li>123123</li></ol><h1><q><span dir="rtl"><cite><tt><small><strong>打的的 的</strong></small></tt></cite></span></q></h1>',
    };
  },
};
</script>

<style lang="less" scoped>
.about {
  .placeholder_box{
    width: 100%;
    height: 60px;
  }

  .msg_box {
    width: 100%;
    border: 1px;
    overflow: hidden;
  }
}
</style>
