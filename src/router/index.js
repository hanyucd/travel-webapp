import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home/Home';
import City from '@/page/city/City';
import Detail from '@/page/detail/Detail';

Vue.use(Router);

export default new Router({
  // 滚动行为：路由跳转回顶部
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'Hanyu',
      component: City
    },
    {
      // 动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
});
