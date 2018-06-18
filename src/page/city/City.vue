<template>
  <div id="city">
    <CityHeader></CityHeader>
    <CitySearch :citiesData="cities"></CitySearch>
    <CityList :citiesData="cities" :hotCityData="hotCity" :letter="letter"></CityList>
    <CityAlphabet :cities="cities" v-on:change="handleLetterChange"></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphabet from './components/Alphabet';
import axios from 'axios';

export default {
  name: 'City',
  data() {
    return {
      cities: {},
      hotCity: [],
      letter: ''
    };
  },
  created() {
    this.getCityData();
  },
  methods: {
    getCityData() {
      axios.get('/api/city.json')
        .then(this.handleCityData);
    },
    handleCityData(res) {
      let cityData = res.data;
      if (cityData.ret) {
        this.cities = cityData.data.cities;
        this.hotCity = cityData.data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
};
</script>

<style lang="scss" scoped>
</style>
