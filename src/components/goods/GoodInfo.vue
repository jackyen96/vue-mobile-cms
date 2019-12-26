<template>
  <div class="container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <slice-pic :slicePicList="lunbotu" :isfull="false"></slice-pic>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
				<div class="mui-card-header">商品标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					 <p>
             市场价: <del>¥2199</del> &nbsp;&nbsp; 销售价:<span class="now-price">¥2099</span>
           </p>
           <p>购买数量</p>
           <mt-button size="small" type="primary">立即购买</mt-button>
           <mt-button size="small" type="danger">加入购物车</mt-button>
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
  </div>
</template>

<script>
import slicePic from "../subcomponents/SlicePic.vue"

export default {
  data(){
    return {
      id: this.$route.params.id, //将路由参数对象中的id挂载到data,方便后期调用
      lunbotu: []   //轮播图的数据
    }
  },
  created(){
    this.getSlicePic()
  },
  methods:{
    getSlicePic(){
      this.$http.get('api/getthumimages/' + this.id)
      .then(result => {
        if(result.body.status === 0){
          result.body.message.forEach(item => {
            item.img = item.src
          })
          this.lunbotu = result.body.message
          
        }
      })
    }
  },
  components:{
    slicePic
  }
}
</script>

<style scoped lang="scss">
.container{
  background-color: #eee;
  overflow: hidden;

  .now-price{
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>