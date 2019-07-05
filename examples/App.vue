<template>
  <div id="app">
    <kui-header></kui-header>
    <div class="container" v-if="!isIndex">
      <side-nav class="nav"></side-nav>
      <router-view/>
    </div>
    <router-view v-else/>
  </div>
</template>

<script>
import SideNav from '@/components/side-nav';
import KuiHeader from '@/components/header';
export default {
  name: 'App',
  data() {
    return {
      isIndex: false
    }
  },
  components: {
    SideNav,
    KuiHeader
  },
  watch: {
    $route() {
      this.isIndex = this.$route.name === 'index';
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .container {
    .nav {
      float: left;
      width: 200px;
    }
  }
}
</style>
