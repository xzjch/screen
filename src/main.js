import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css'
import '@/assets/css/element.css'
import '@/assets/js/jquery-1.11.0.min.js'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// const store = new Vuex.Store({
//   state(){
//     return {
//       test:'全局变量',
//     }
//   },
//   mutations:{
//     testMethod(){
//       console.log("这是一个测试全局方法",test)
//     },
//   }
// })
// Vue.use(store)
