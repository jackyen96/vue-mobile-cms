<template>
  <div class="container">
    <div class="goods-list">
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch @change="checkChange(item.id)"
            v-model="item.selected"></mt-switch>
            <img :src="item.thumb_path" />
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p class="numnprice">
                <span class="price">¥{{ item.sell_price}}</span>
                <!-- 从购物车中获取商品数量 -->
                  <!-- 1.先创建一个空对象,然后循环购物车中所有的商品数据,把当前循环这条商品的Id
                  作为对象的属性名,count值作为对象的属性值,这样把所有的商品循环一遍就会得到一个对象
                  {88:2,90:3,92:4}这种类似的格式. -->
                <numbox class="numbox" 
                :initcount="$store.getters.getGoodsCount[item.id]"
                :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mui-card checkout">
        <div class="mui-card-content">
          <div
            class="mui-card-content-inner"
          >
          <div class="left">
            <p>总计(不含运费)</p>
            <p>已勾选商品<span class="red">0</span>件, 总价¥<span class="red">0</span>元</p>
          </div>
          <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../components/subcomponents/cart_numbox.vue";

export default {
  data() {
    return {
      //购物车中所有商品的数据,该数据用于渲染列表,
      //但是不包含具体每样商品的数量,商品数量保存在本地
      goodslist: []
    }
  },
  created(){
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      //1.获取store中所有商品的id拼接出用逗号分割的字符串
      let idArr = []
      this.$store.state.cart.forEach(item => {
        idArr.push(item.id)
      })
      if(idArr.length <= 0)
      return
      this.$http.get("api/goods/getshopcarlist/" + idArr.join(',')).then(
        result => {
          if(result.body.status === 0){
            this.goodslist = result.body.message
          }
        }
      )
    },
    remove(id,index){
      this.goodslist.splice(index,1)
      this.$store.commit('removeFromCart',id)
    },
    checkChange(id){

    }
  },
  components: {
    numbox
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: #eee;
  overflow: hidden;

  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .numnprice {
        span.price {
          color: red;
          font-weight: bold;
        }

        .numbox {
          display: inline-block;
          width: auto;
        }
      }
      h1 {
        font-size: 13px;
        max-width: 220px;
      }
    }

    img {
      width: 60px;
      height: 60px;
    }

    .checkout{
      .red{
        color: red;
      }
    }
  }
}
</style>