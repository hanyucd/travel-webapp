<template>
  <div id="city">
    <CityHeader></CityHeader>
  </div>
</template>

<script>
import CityHeader from './components/Header';

export default {
  name: 'City',
  data() {
    return {
      msg: '韩宇'
    };
  },
  components: {
    CityHeader
  }
};
</script>

<style lang="scss" scoped>
</style>
