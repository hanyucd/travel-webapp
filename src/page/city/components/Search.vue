<template>
  <div id="search">
    <input type="text" placeholder="输入城市名或拼音" maxlength="10" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  data() {
    return {
    };
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
</style>
