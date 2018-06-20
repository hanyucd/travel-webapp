<template>
  <div id="header">
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <div class="iconfont abs-back">&#xe624;</div>
    </router-link>
    <section class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      景点详情
    </section>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
  methods: {
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 100) {
        let opacity = scrollTop / 150;
        opacity = opacity > 1 ? 1 : opacity;
        this.$set(this.opacityStyle, 'opacity', opacity);
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/var.scss';

#header {
  .header-abs {
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    border-radius: .4rem;
    text-align: center;
    background: rgba(0, 0, 0, .8);
    .abs-back {
      color: #fff;
      font-size: .4rem;
    }
  }
  .header-fixed {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    background: $bgColor;
    color: #fff;
    font-size: .32rem;
    .header-back {
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
}
</style>
