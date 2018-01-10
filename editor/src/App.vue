<template>
  <div id="app" :style="style">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
      return {
          style: {
              height: window.innerHeight + 'px',
              width: window.innerWidth + 'px'
          }
      }
  }
};
</script>

<style lang="scss">
#app {
}
</style>
