<template>
  <div id="gallery" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="swiper-img" :src="item" />
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
       </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        observer: true,
        observeParents: true
        // pagination: {
        //   el: '.swiper-pagination'
        // }
      }
    };
  },
  methods: {
    handleGalleryClick() {
      this.$emit('close', false);
    }
  }
};
</script>

<style lang='scss' scoped>
#gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background: #000;
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .swiper-img {
      width: 100%;
    }
  }
}
</style>
