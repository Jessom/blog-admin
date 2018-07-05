<template>
  <div class="hand-wrap">
    <!-- 按钮组 -->
    <div class="btn-wrap" v-if='btns.length'>
      <span class="mr10" v-for='(item, ind) in btns' :key='ind'>
        <el-button
          :type="item.type"
          @click='item.event'
          :size='btnSize'>{{item.label}}</el-button>
      </span>
    </div>
    <!-- 筛选 -->
    <div class="mt10" v-if='screen.length'>
      <el-select v-model="option" clearable placeholder="请选择">
        <el-option
          v-for="item in screen"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <!-- 日期选择 -->
    <div class="mt10">
      <el-date-picker
        v-model="data"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: '',
      data: ''
    }
  },
  props: {
    btns: {
      type: Array,
      default: function() { return [] }
    },
    btnSize: {
      type: String,
      default: 'small'
    },
    screen: {
      type: Array,
      default: function() { return [] }
    }
  }
}
</script>

<style lang="scss">
.hand-wrap {
  .el-date-editor--daterange.el-input__inner, .el-select {
    width: 100%;
  }
}
</style>
