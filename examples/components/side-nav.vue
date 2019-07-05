<template>
  <div class="side-nav">
    <div v-for="(title, titIndex) in Object.keys(data)" :key="titIndex">
      <h3>{{title}}</h3>
      <div v-for="(nav, navIndex) in data[title]" :key="navIndex" v-if="nav.desc">
        <router-link :to="nav.path" v-if="nav.name">{{nav.desc}}</router-link>
        <div v-else>
          <h5>{{nav.desc}}</h5>
          <div v-for="(it,i) in nav.items" :key="i">
            <router-link :to="it.path">{{it.desc}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navConfig from '../nav.config.json';
export default {
  data() {
    return {
      data: navConfig
    }
  }
}
</script>
<style lang="less" scoped>

</style>
