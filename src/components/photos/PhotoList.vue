<template>
  <div class="container">
    <!-- 头部区域 -->
    <van-tabs @click="onTabsClick">
      <van-tab v-for="item in categories" :name="item.id" :title="item.title"
      ></van-tab>
    </van-tabs>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link tag="li" v-for="item in list" :to="'/home/photoinfo/'+item.id">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//导入mui的js文件
import mui from "../../lib/mui/js/mui.min.js";

import { Toast } from "mint-ui";

export default {
  data() {
    return {
      categories: [],
      list: []
    };
  },
  methods: {
    getAllCategory() {
      //获取所有图片分类
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.categories = result.body.message;
        } else {
          Toast("获取图片分类失败");
        }
      })
    },
    getPhotoListByCateId(cateId) {
      //根据分类id获取图片列表
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
          console.log("getitem" + cateId);
        } else {
          Toast("获取图片失败");
        }
      })
    },
    onTabsClick(name,title){
      this.getPhotoListByCateId(name)
    }
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  }
};
</script>

<style scoped lang="scss">
.container {
  .mui-scroll {
    touch-action: pan-y;
  }
  .photo-list {
    margin: 0;
    padding: 0 9px;
    margin-top: 5px;
    li {
      position: relative;
      background-color: #aaa;
      margin-top: 8px;
      text-align: center;
      list-style: none;
      box-shadow: 0 0 9px #999;
      img{
        vertical-align: middle;
        width: 100%;
      }
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }

      .info{
        background-color: rgba($color: #000000, $alpha: 0.4);
        position:absolute;
        bottom: 0;
        color: white;
        max-height: 84px;
        .info-title{
          text-align: left;
          font-size: 14px;
        }
        .info-body{
          font-size: 13px;
        }
      }
    }
  }
}

</style>