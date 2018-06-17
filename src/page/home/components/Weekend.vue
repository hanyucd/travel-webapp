<template>
  <div id="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendData" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendData: Array
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/var.scss';

#weekend {
  margin-top: .2rem;
  .weekend-title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem; // 首行文本的缩进
  }
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    .item-img {
      width: 100%;
    }
  }
  .item-info {
    padding: .1rem;
    .item-title {
      line-height: .54rem;
      font-size: .32rem;
      @include ellipsis;
    }
    .item-desc {
      line-height: .4rem;
      color: #ccc;
      @include ellipsis;
    }
  }
}
</style>
