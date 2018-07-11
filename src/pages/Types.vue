<template>
  <div class="types-wrap">
    <el-row :gutter='12'>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <slide-com title='管理员'>
          <el-table
            :data="types"
            style="width: 100%">
            <el-table-column
              label="类型名"
              prop="name">
            </el-table-column>
            <el-table-column
              label="状态"
              prop="status">
              <template slot-scope="scope">
                <el-tag
                  size='small'
                  :type="scope.row.status?'success':'warning'">{{scope.row.status ? "正常": "禁用"}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="添加时间"
              prop="lastTime">
            </el-table-column>
            <el-table-column
              label="操作"
              width='150'
              prop="lastTime">
              <template slot-scope="scope">
                <el-button
                  :type="scope.row.status?'warning':'success'"
                  @click='able(scope.row)'
                  size="mini">{{scope.row.status?'禁用':'启用'}}</el-button>
                <el-button @click='del(scope.row)' type="danger" size="mini">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </slide-com>
      </el-col>
      <!-- 操作区域 -->
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <slide-com title='操作'>
          <hand-com :btns='btns' :showDate='false' />
        </slide-com>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: [],
      btns: [{
        label: '添加类型',
        type: 'primary',
        event: () => console.log('51')
      }]
    }
  },
  methods: {
    // 启用 / 禁用
    able(item) {
      console.log(item)
    },
    // 删除
    del(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss">
.types-wrap {
}
</style>
