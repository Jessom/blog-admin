<template>
  <el-menu
    class="top-bar-wrap"
    background-color="#333744"
    text-color="#fff"
    active-text-color="#ffd04b"
    mode="horizontal"
    @select="handleSelect">
    <el-menu-item class="logo-wrap" index="/index">
      <img src="http://p94agf1t4.bkt.clouddn.com/images/logo.png" alt="">
    </el-menu-item>

    <el-submenu class="user-wrap" index="/index">
      <template slot="title">
        <img class="avatar" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3154777717,3742877994&fm=27&gp=0.jpg" alt="">
        {{userInfo.name}}
      </template>
      <el-menu-item index="2-1">个人资料</el-menu-item>
      <el-menu-item index="2-1">设置</el-menu-item>
      <el-menu-item index="2-1">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'topbar',
  computed: {
    ...mapState({
      userInfo: state => state.mutations.userInfo
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
$avatar: 40px;
.top-bar-wrap {
  border-bottom: 0;
  .logo-wrap {
    img { width: 120px; }
  }
  .user-wrap {
    float: right;
    .avatar {
      width: $avatar;
      height: $avatar;
      border-radius: 50%;
    }
  }
}
</style>
