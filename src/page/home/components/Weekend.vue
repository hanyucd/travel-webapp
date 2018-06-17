<template>
  <div id="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
          title: '杭州西湖',
          desc: '中国第一湖'
        },
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
          title: '杭州西湖',
          desc: '中国第一湖'
        },
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
          title: '杭州西湖',
          desc: '中国第一湖'
        }
      ]
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
    padding-bottom: 33.9%;
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
