<template>
  <div id="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <!-- <input type="text" placeholder="输入城市/景点/游玩主题" /> -->
      <span class="iconfont">&#xe632;</span>
      输入城市 / 景点 / 游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeHeader',
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['city'])
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/styles/var.scss';

#header {
  display: flex;
  height: .86rem;
  line-height: .86rem;
  background: $bgColor;
  color: #fff;
  .header-left {
    width: .64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: .4rem;
    }
  }
  .header-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding: 0 .2rem;
    background: #fff;
    color: #ccc;
    border-radius: .1rem;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon {
      font-size: .24rem;
      margin-left: -.04rem;
    }
  }
}
</style>
