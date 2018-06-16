// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 解决移动端 click 事件300毫秒延迟问题
// import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';

// fastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
