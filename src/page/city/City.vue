<template>
  <div id="city">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
  </div>
</template>

<script>
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';

export default {
  name: 'City',
  data() {
    return {
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
  }
};
</script>

<style lang="scss" scoped>
</style>
