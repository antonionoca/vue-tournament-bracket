<template>
  <div class="app">
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from 'src/vuex/store.js'

export default {
  store,
  components: { }
}
</script>

<style lang="less">
@import '~src/assets/styles/index.less';

html, body {
  height: 100%;
  overflow: hidden;
}
// layout
.app {
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
}
</style>
