<template>
  <div class="container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in slicePicList" :key="i">
        <img :src="item.img" :class="{full:isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["slicePicList", "isfull"]
};
</script>

<style scoped lang="scss">
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;
    background-color: white;
    

    img {
      height: 100%;
    }

    img.full {
      width: 100%;
    }
  }
}
</style>