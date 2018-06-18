<template>
  <div id="city">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>

<script>
import CityHeader from './components/Header';
import CitySearch from './components/Search';

export default {
  name: 'City',
  data() {
    return {
      msg: '韩宇'
    };
  },
  components: {
    CityHeader,
    CitySearch
  }
};
</script>

<style lang="scss" scoped>
</style>
