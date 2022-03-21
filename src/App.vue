<template>
  <div id="nav">
    <nav-header></nav-header>
    <nav-tab></nav-tab>
  </div>
  <router-view/>
</template>
<script>
import navHeader from '@/components/header/header'
import navTab from '@/components/tab/tab'
export default {
  components: {
    navHeader,
    navTab
  }
}
</script>
<style lang="less">

</style>
