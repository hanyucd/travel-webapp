<template>
  <div id="alphabet">
    <ul>
      <li class="item" v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      const letters = [];
      // 遍历对象取得是 key
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  methods: {
    handleClick(event) {
      // 触发事件
      this.$emit('change', event.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(event) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = event.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index]);
          }
        }, 10);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/var.scss';

#alphabet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  .item {
    line-height: .4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
