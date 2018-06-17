<template>
  <div id="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
import HomeHeader from './components/header';
import HomeSwiper from './components/swiper';
import HomeIcons from './components/Icons';

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
    HomeIcons
  }
};
</script>

<style lang='scss' scoped>
</style>
