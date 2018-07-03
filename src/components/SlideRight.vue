<template>
  <el-menu
    :default-active="active"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select='handleSelect'
    class="el-menu-vertical-demo"
    :collapse="isCollapse">
    <el-menu-item index="#">
      <i class="el-icon-more"></i>
    </el-menu-item>
    <el-menu-item index="/index">
      <i class="el-icon-menu"></i>
      <span slot="title">仪表盘</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-document"></i>
      <span slot="title">文章</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      active: '/index'
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.mutations.slideRightCollapse
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      if(key === '#') {
        this.$store.commit('SET_STATE', {key: 'slideRightCollapse', val: !this.isCollapse})
      }
    }
  }
}
</script>

<style lang="scss">
.el-menu-vertical-demo {
  display: inline-block;
  vertical-align: top;
  height: calc(100% - 60px);
  border-right: 0;
  transition: none !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  .el-menu-item:first-child {
    text-align: center;
  }
}
</style>
