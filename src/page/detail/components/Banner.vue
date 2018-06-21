<template>
  <div id="banner">
    <div class="banner-wrapper" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ gallaryImgs.length }}
        </div>
      </div>
    </div>

    <Fade>
      <Gallery :imgs="gallaryImgs" v-show="showGallery" v-on:close="handleGalleryClose"></Gallery>
    </Fade>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery';
import Fade from '@/components/Fade';

export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallery: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true;
    },
    handleGalleryClose(close) {
      this.showGallery = close;
    }
  },
  components: {
    Gallery,
    Fade
  }
};
</script>

<style lang="scss" scoped>
#banner {
  .banner-wrapper {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img {
      width: 100%;
    }
    .banner-info {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)); // 背景渐变
      .banner-title {
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-number {
        height: .32rem;
        line-height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        font-size: .24rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .8);
        .banner-icon {
          font-size: .24rem;
        }
      }
    }
  }
}
</style>
