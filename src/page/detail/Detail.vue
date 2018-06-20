<template>
  <div id="detail">
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';

export default {
  name: 'Detail',
  data() {
    return {
      msg: '详情'
    };
  },
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>

<style lang='scss' scoped>
.content {
  height: 50rem;
}
</style>
