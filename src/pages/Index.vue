<template>
  <div class="container">
    <topbar />
    <slide-right />
    <router-view></router-view>
  </div>
</template>

<script>
import SlideRight from '@/components/SlideRight.vue'
import Topbar from '@/components/Topbar.vue'
export default {
  components: {
    SlideRight,
    Topbar
  }
}
</script>

<style lang="scss">
.container { height: 100%; }
</style>
