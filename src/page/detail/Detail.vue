<template>
  <div id="detail">
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </DetailBanner>
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
import axios from 'axios';

export default {
  name: 'Detail',
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    };
  },
  async created() {
    try {
      var detailData = await axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        return res.data;
      });
    } catch (error) {
      console.log(error.message);
    }
    if (detailData.ret) {
      this.sightName = detailData.data.sightName;
      this.bannerImg = detailData.data.bannerImg;
      this.gallaryImgs = detailData.data.gallaryImgs;
      this.list = detailData.data.categoryList;
    }
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
