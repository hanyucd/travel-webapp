<template>
  <div id="app">
    <!-- exclude：任何匹配的组件都不会被缓存 -->
    <keep-alive exclude="Detail" >
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {

}
</style>
