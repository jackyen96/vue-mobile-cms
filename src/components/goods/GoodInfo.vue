<template>
  <div class="container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

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
      <div class="mui-card-header">{{ goodinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价:
            <del>¥{{ goodinfo.market_price }}</del> &nbsp;&nbsp; 销售价:
            <span class="now-price">¥{{ goodinfo.sell_price }}</span>
          </p>
          <div>
            <p style="display:inline;">购买数量:</p>
            <num-box
              class="numbox"
              @get-count="getSelectCount"
              :maxcount="goodinfo.stock_quantity"
              ref="numbox"
            ></num-box>
          </div>
          <mt-button class="buttom" size="small" type="primary">立即购买</mt-button>
          <mt-button class="buttom" size="small" type="danger" @click="addToCart">加入购物车</mt-button>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号: {{ goodinfo.goods_no }}</p>
          <p>库存情况: {{ goodinfo.stock_quantity }}件</p>
          <p>上架时间: {{ goodinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button class="buttom" type="primary" size="large" @click="goDetail(id)" plain>图文介绍</mt-button>
        <mt-button class="buttom" type="danger" size="large" @click="goComment(id)" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import slicePic from "../subcomponents/SlicePic.vue";
import numBox from "../subcomponents/goodinfo_numbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, //将路由参数对象中的id挂载到data,方便后期调用
      lunbotu: [], //轮播图的数据
      goodinfo: {},
      ballFlag: false,
      selectCount: 1 //保存用户选中的商品数量,默认是一个
    };
  },
  created() {
    this.getSlicePic();
    this.getGoodInfo();
  },
  methods: {
    getSlicePic() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      });
    },
    getGoodInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodinfo = result.body.message[0];
        }
      });
    },
    goComment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    goDetail(id) {
      this.$router.push({ name: "goodsdetail", params: { id } });
    },
    addToCart() {
      this.ballFlag = !this.ballFlag;
      let goodsinfo = {
        id: this.id,
        count: this.selectCount,
        price: this.goodinfo.price,
        selected: true
      };
      this.$store.commit("addToCart", goodsinfo);

      this.$refs.numbox.$refs.numbox.value = 1;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      //获取小球在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      //获取徽标在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.offsetWidth;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.4s cubic-bezier(0.4, -0.3, 1, 0.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectCount(count) {
      this.selectCount = count;
    }
  },
  components: {
    slicePic,
    numBox
  }
};
</script>

<style scoped lang="scss">
.container {
  background-color: #eee;
  overflow: hidden;

  .mui-card-content {
    .mui-card-content-inner {
      .now-price {
        color: red;
        font-size: 16px;
        font-weight: bold;
      }

      .numbox {
        display: inline-block;
        width: auto;
      }

      .buttom {
        margin-top: 10px;
      }
    }
  }

  .mui-card-footer {
    display: block;
    .buttom {
      margin-top: 10px;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 410px;
    left: 143px;
    // transform: translate(119px,279px)
  }
}
</style>