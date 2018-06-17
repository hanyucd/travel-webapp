<template>
  <div id="home_swiper">
    <swiper :options="swiperOption" v-if="showSwiper" class="top-swiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperData" :key="item.id" class="item-swiper">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperData: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        loop: true, // 循环轮播
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  computed: {
    showSwiper() {
      return this.swiperData.length;
    }
  }
};
</script>

<style lang='scss' scoped>
#home_swiper {
  width: 100%;
  height: 3rem;
  overflow: hidden;
  background: #eee;
  // padding-bottom: 50%;
  .top-swiper {
    height: 3rem;
    .item-swiper {
      height: 3rem;
      .swiper-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<style>
#home_swiper .swiper-pagination-bullet-active {
  background: white;
}
</style>
