<template>
  <el-menu
    :default-active="active"
    background-color="#333744"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select='handleSelect'
    class="el-menu-vertical-demo"
    :collapse="isCollapse">
    <el-menu-item index="#">
      <i class="el-icon-more"></i>
    </el-menu-item>
    <el-menu-item index="/dashboard">
      <i class="iconfont icon-yibiaopan"></i>
      <span slot="title">仪表盘</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="iconfont icon-wenzhang"></i>
      <span slot="title">文章管理</span>
    </el-menu-item>
    <el-menu-item index="/admin">
      <i class="iconfont icon-yonghu-tianchong"></i>
      <span slot="title">管理员</span>
    </el-menu-item>
    <el-menu-item index="/site">
      <i class="iconfont icon-qiu"></i>
      <span slot="title">站点设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isCollapse: state => state.mutations.slideRightCollapse,
      active: state => state.mutations.curPath
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      if(key === '#') {
        this.$store.commit('SET_STATE', {key: 'slideRightCollapse', val: !this.isCollapse})
      } else {
        this.$store.commit('SET_STATE', { key: 'curPath', val: key })
        this.$router.push({ path: key })
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
