<template>
  <div id="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperData="swiperList"></HomeSwiper>
    <HomeIcons :iconData="iconList"></HomeIcons>
    <HomeRecommend :recommendData="recommendList"></HomeRecommend>
    <HomeWeekend :weekendData="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/header';
import HomeSwiper from './components/swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    };
  },
  computed: {
    ...mapState(['city'])
  },
  created() {
    this.lastCity = this.city;
    this.getHomeData();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeData();
    }
  },
  methods: {
    getHomeData() {
      axios.get(`/api/index.json?city=${this.city}`)
        .then(this.getHomeDataSucc);
    },
    getHomeDataSucc(res) {
      let indexData = res.data;
      if (indexData.ret) {
        this.swiperList = indexData.data.swiperList;
        this.iconList = indexData.data.iconList;
        this.recommendList = indexData.data.recommendList;
        this.weekendList = indexData.data.weekendList;
      }
    }
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
