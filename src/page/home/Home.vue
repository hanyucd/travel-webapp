<template>
  <div id="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeHeader from './components/header';
import HomeSwiper from './components/swiper';

export default {
  name: 'Home',
  data() {
    return {
      home: '家'
    };
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style lang='scss' scoped>
</style>
