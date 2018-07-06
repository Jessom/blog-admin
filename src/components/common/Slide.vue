<template>
  <div class="slide-wrap">
    <div class="slide-head space-between">
      <span class="title">{{title}}</span>
      <el-input
        placeholder="请输入内容"
        size='small'
        @keyup.13.native="$emit('entry', search)"
        v-if='showSearch'
        suffix-icon="el-icon-search"
        v-model="search">
      </el-input>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  props: {
    title: String,
    showSearch: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.slide-wrap {
  background-color: #fff;
  .slide-head {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    .el-input { width: 180px; }
    .title {
      color: #444;
      font-size: 14px;
    }
  }
  .content {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }
}
</style>
