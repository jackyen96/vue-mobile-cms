import VueRouter from 'vue-router'

import HomeComp from './components/HomeContainer.vue'
import CartComp from './components/CartContainer.vue'
import MemberComp from './components/MemberContainer.vue'
import SearchComp from './components/SearchContainer.vue'

var router = new VueRouter({
  routes: [
    {path: '/',redirect:'/home'},
    {path: '/home',component:HomeComp},
    {path: '/member',component:MemberComp},
    {path: '/cart', component: CartComp},
    {path: '/search',component: SearchComp}
  ],
  linkActiveClass: "mui-active"
})

export default router