<template>
  <div class="dashboard-wrap">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="hover">
          <i class="el-icon-info"></i>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <i class="el-icon-error"></i>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <i class="el-icon-success"></i>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <i class="el-icon-warning"></i>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<style lang="scss">

</style>
