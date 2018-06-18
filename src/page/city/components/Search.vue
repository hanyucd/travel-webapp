<template>
  <section>
    <div id="search">
      <input type="text" v-model="keyword" placeholder="输入城市名或拼音" maxlength="10" />
    </div>
    <div class="search-result" ref="search" v-if="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{ item.name }}</li>
        <li class="search-item" v-show="!list.length">没有找到匹配项</li>
      </ul>
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'CitySearch',
  props: {
    citiesData: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let key in this.citiesData) {
          this.citiesData[key].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/styles/var.scss';

#search {
  height: .72rem;
  padding: 0 .1rem;
  background: $bgColor;
  input {
    width: 100%;
    height: .62rem;
    box-sizing: border-box;
    padding: 0 .2rem;
    line-height: .62rem;
    text-align: center;
    border-radius: .06rem;
  }
}
.search-result {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: #eee;
  .search-item {
    line-height: .62rem;
    padding: 0 .3rem;
    background: #fff;
    color: $bgColor;
  }
}
</style>
