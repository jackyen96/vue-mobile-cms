import VueRouter from 'vue-router'

import HomeComp from './components/HomeContainer.vue'
import CartComp from './components/CartContainer.vue'
import MemberComp from './components/MemberContainer.vue'
import SearchComp from './components/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import Photoinfo from './components/photos/Photoinfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodInfo from './components/goods/GoodInfo.vue'
import GoodsDetail from './components/goods/GoodsDetail.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


var router = new VueRouter({
  routes: [
    {path: '/',redirect:'/home'},
    {path: '/home',component: HomeComp},
    {path: '/member',component: MemberComp},
    {path: '/cart', component: CartComp},
    {path: '/search',component: SearchComp},
    {path: '/home/newslist',component: NewsList},
    {path: '/home/newsinfo/:id',component:NewsInfo},
    {path: '/home/photolist',component: PhotoList},
    {path: '/home/photoinfo/:id',component: Photoinfo},
    {path: '/home/goodslist', component: GoodsList},
    {path: '/home/goodsinfo/:id', component: GoodInfo},
    {path: '/home/goodsdetail/:id', component: GoodsDetail, name:'goodsdetail'},
    {path: '/home/goodscomment/:id', component: GoodsComment, name:'goodscomment'}
  ],
  linkActiveClass: "mui-active"
})

export default router