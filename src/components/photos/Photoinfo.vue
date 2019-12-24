<template>
  <div class="container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>{{photoinfo.add_time | dateFormat}}</span>
      <span>点击次数: {{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <vue-preview :slides="list" @close="handleClose"></vue-preview>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
      
    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: [] //缩略图的数组
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  components: {
    "cmt-box": comment
  },
  methods: {
    handleClose(){

    },
    getPhotoInfo() {
      //获取图片的详情
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status == 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      //获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          //循环每个图片数据,补全图片的宽和高
          this.list = result.body.message.map(obj => {
            obj.w = 600
            obj.h = 400
            obj.msrc = obj.src
            return obj
          })
        }
      })
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
}
</style>