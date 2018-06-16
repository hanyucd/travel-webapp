<template>
  <div id="home_swiper">
    <swiper :options="swiperOption" class="top-swiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id" class="item-swiper">
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
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        loop: true, // 循环轮播
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg'
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
#home_swiper {
  width: 100%;
  height: 3rem;
  overflow: hidden;
  background: #eee;
  // padding-bottom: 31.25%;
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
