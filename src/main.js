import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui'
import store from './store';
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import './login.js' 
import './ui.js'
import '../static/UE/ueditor.config.js'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'
Vue.use(ElementUI);
Vue.config.productionTip = false;
var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


