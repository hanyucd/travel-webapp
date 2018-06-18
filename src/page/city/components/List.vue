<template>
  <div id="list">
    <!-- 当前城市 -->
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="n in 10">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <!-- 热门城市 -->
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="n in 8">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <!-- 城市排序 -->
    <div class="area" v-for="n in 10">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom" v-for="n in 10">
          杭州
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  data() {
    return {
    };
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
      line-height: .44rem;
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
