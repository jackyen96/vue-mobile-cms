//入口文件
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//按需导入mint ui
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
import router from './router'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import './lib/mui/sass/mui.scss'
import './lib/mui/sass/icons-extra.css'
import { Tab, Tabs} from 'vant'
import 'mint-ui/lib/style.css'


Vue.use(Tab).use(Tabs)
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


//设置全局的日期格式filter
Vue.filter('dateFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dateStr).format(pattern)
})

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

let vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

