<template>
  <div id="detail">
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';

export default {
  name: 'Detail',
  data() {
    return {
      list: [
        { title: '成年人',
          children: [{
            title: '成年人 3 联票'
          }, {
            title: '成年人 5 联票'
          }]
        },
        { title: '学生人' },
        { title: '儿童人' },
      ]
    };
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>

<style lang='scss' scoped>
.content {
  height: 50rem;
}
</style>
