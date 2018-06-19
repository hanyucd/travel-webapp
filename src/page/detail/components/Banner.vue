<template>
  <div id="banner">
    <div class="banner-wrapper" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201401/06/3fbbddda915cb7637439d484440d36be.jpg_600x330_0affc9e8.jpg" />
      <div class="banner-info">
        <div class="banner-title">杭州云曼温泉</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          13
        </div>
      </div>
    </div>

    <Gallery :imgs="imgs" v-show="showGallery" v-on:close="handleGalleryClose"></Gallery>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery';

export default {
  name: 'Banner',
  data() {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1712/bd/bd818c6e984e8a48a3.img.jpg_r_800x800_8074e045.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/b0/3c6c5bb4bb7adbfe67e891caf10fdcf5.water.jpg_r_800x800_32df781f.jpg'
      ],
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
    Gallery
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
