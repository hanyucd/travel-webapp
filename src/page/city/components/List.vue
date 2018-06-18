<template>
  <div id="list" ref="cityListWrapper">
    <!-- 分块标签 -->
    <section class="city-content">
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCityData" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- 城市排序 -->
      <div class="area" v-for="(city, key) of citiesData" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="item of city" :key="item.id" @click="handleCityClick(item.name)">
            {{ item.name }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CityList',
  props: {
    citiesData: Object,
    hotCityData: Array,
    letter: String
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element, 1000);
      }
    }
  },
  methods: {
    handleCityClick(city) {
      // this.$store.dispatch('emitChangeCity', city);
      this.emitChangeCity(city);
      this.$router.push({ path: '/' });
    },
    ...mapActions([
      'emitChangeCity'
    ])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.cityListWrapper);
  }
};
</script>

<style lang='scss' scoped>

#list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area {
    .title {
      line-height: .54rem;
      background: #eee;
      padding-left: .2rem;
      color: #666;
      font-size: .26rem;
    }
    .border-topbottom {
      &::before {
        background: #ccc;
      }
      &::after {
        background: #ccc;
      }
    }
    .button-list {
      overflow: hidden;
      padding: .1rem .6rem .1rem .1rem;
      .button-wrapper {
        float: left;
        width: 33.33%;
        .button {
          text-align: center;
          padding: .1rem 0;
          margin: .1rem;
          border: .02rem solid #ccc;
          border-radius: .8rem;
        }
      }
    }
    .item-list {
      .item {
        line-height: .76rem;
        color: #666;
        padding-left: .2rem;
      }
      .border-bottom {
        &::before {
          border-color: #ccc;
        }
      }
    }
  }
}
</style>
