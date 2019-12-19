//入口文件
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//按需导入mint ui
import { Header, Swipe, SwipeItem } from 'mint-ui'
import router from './router'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import './lib/mui/sass/mui.scss'
import './lib/mui/sass/icons-extra.css'
Vue.component(Header.name, Header)
Vue.use(VueRouter)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueResource)






let vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

