//入口文件
import Vue from 'vue'
import App from './App.vue'
console.log('ok')

//按需导入mint ui
import { Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/sass/mui.scss'
Vue.component(Header.name,Header)


let vm = new Vue({
  render: h => h(App)
}).$mount('#app')