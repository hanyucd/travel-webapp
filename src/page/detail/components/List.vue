<template>
  <div id="list">
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <DetailList :list="item.children"></DetailList>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // name 属性，可用于自己引用自己（递归组件）
  name: 'DetailList',
  props: {
    list: Array
  },
  data() {
    return {
      msg: '列表'
    };
  }
};
</script>

<style lang='scss' scoped>
#list {
  .item-title {
    line-height: .8rem;
    font-size: .32rem;
    padding: 0 .2rem;
    .item-title-icon {
      position: relative;
      left: .06rem;
      top: .06rem;
      display: inline-block;
      width: .35rem;
      height: .36rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
    }
  }
  .item-children {
    padding: 0 .2rem;
  }
}
</style>
