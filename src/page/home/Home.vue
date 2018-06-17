<template>
  <div id="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeRecommend></HomeRecommend>
    <HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/header';
import HomeSwiper from './components/swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';

export default {
  name: 'Home',
  data() {
    return {
      home: '家'
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
};
</script>

<style lang='scss' scoped>
</style>
