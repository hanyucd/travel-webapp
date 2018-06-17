<template>
  <div id="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconData: Array
  },
  data() {
    return {
    };
  },
  computed: {
    // 利用二维数组
    pages() {
      let pages = new Array();
      // 数组每个元素都执行一次回调函数 | 无返回值
      this.iconData.forEach((item, index) => {
        // 返回小于或等于一个给定数字的最大整数
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        };
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/styles/var.scss';

#icons {
  height: 0;
  padding-bottom: 50%; // 使用 margin/padding 的百分比值来解决自适应高度
  margin-top: .2rem;
  overflow: hidden;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .44rem;
      box-sizing: border-box;
      padding: .1rem;
      img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: .44rem;
      line-height: .44rem;
      text-align: center;
      color: $darkText;
      @include ellipsis;
    }
  }
}
</style>

<style>
#icons .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
</style>
