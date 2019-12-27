//入口文件
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//按需导入mint ui
import { Header, Swipe, SwipeItem, Button, Lazyload, Switch } from 'mint-ui'
import router from './router'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import './lib/mui/sass/mui.scss'
import './lib/mui/sass/icons-extra.css'
import { Tab, Tabs} from 'vant'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Tab).use(Tabs)
Vue.component(Switch.name,Switch)
Vue.use(Lazyload)
Vue.component(Header.name, Header)
Vue.use(VueRouter)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(VueResource)
//设置vue-resource http请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
//全局设置post时候表单数据的组织格式
Vue.http.options.emulateJSON = true

import moment from 'moment'


//从localstorage中获取初始化的空cart
let cart = JSON.parse(localStorage.getItem('cart')) || []

let store = new Vuex.Store({
  state:{ 
    cart    //购物车中商品的数据
  },
  mutations:{
    addToCart(state, goodsinfo){
      let flag = false

      state.cart.some(item => {
        if(item.id === goodsinfo.id){
          item.count += goodsinfo.count
          flag = true
          return true
        }
      })

      //如果最终循环完毕,得到的flag还是false,则把商品数据直接push到购物车中
      if(!flag){
        state.cart.push(goodsinfo)
      }

      //更新完cart 之后,把cart存储到本地的localstorage中去
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    updateGoodsInfo(state,goodsinfo){
      //修改购物车中商品的数量值
      state.cart.some(item => {
        if(item.id == goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeFromCart(state,id){
      state.cart.some((item, i) => {
        if(item.id == id){
          state.cart.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('cart',JSON.stringify(state.cart))


    }
  },
  getters:{
    //geters相当于计算属性,相当于filter
    getAllCount(state){
      let c = 0
      state.cart.map(
        item => {
          c += item.count
        }
      )
      return c
    },
    getGoodsCount(state){
      let o = {}
      state.cart.forEach(item => {
        o[item.id] = item.count
      })
      return o
    }
  }
})

//设置全局的日期格式filter
Vue.filter('dateFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dateStr).format(pattern)
})

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

let vm = new Vue({
  render: h => h(App),
  router,
  store   //挂载store
}).$mount('#app')

