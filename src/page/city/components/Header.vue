<template>
  <div id="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/var.scss';

#header {
  position: relative;
  overflow: hidden;
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
</style>
