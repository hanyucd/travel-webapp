<template>
  <div id="detail">
    <DetailBanner></DetailBanner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner';

export default {
  name: 'Detail',
  data() {
    return {
      msg: '详情'
    };
  },
  components: {
    DetailBanner
  }
};
</script>

<style lang='scss' scoped>
</style>
