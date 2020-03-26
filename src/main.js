/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-03-21 11:23:18
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-25 17:28:51
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

// var vant = window.vant;
// Vue.use(vant.Lazyload);

Vue.config.productionTip = false

Vue.use(Vant);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
