<template>
  <div class="container">
    <topbar />
    <slide-right /><div class="router-wrap" :class='{"collapse": !slideRightCollapse}'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SlideRight from '@/components/SlideRight.vue'
import Topbar from '@/components/Topbar.vue'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      slideRightCollapse: state => state.mutations.slideRightCollapse
    })
  },
  components: {
    SlideRight,
    Topbar
  }
}
</script>

<style lang="scss">
.container { height: 100%; }
.router-wrap {
  padding: 15px 15px 0 15px;
  display: inline-block;
  width: calc(100% - 95px);
  &.collapse {
    width: calc(100% - 230px);
  }
}
</style>
