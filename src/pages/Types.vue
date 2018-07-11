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
              prop="firstTime">
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

    <el-dialog title="添加类型" width='300px' :visible.sync="dialog">
      <el-form ref="typeForm" :model="typeForm">
        <el-form-item
          :rules='[{ required: true, message: "请输入类型名", trigger: "blur" }]'
          prop='name'>
          <el-input
            prefix-icon='iconfont icon-17'
            v-model="typeForm.name"
            placeholder='请输入类型名'
            autofocus="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click='addType("typeForm")'>确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { filterTime } from '@/utils/filter'
export default {
  data () {
    return {
      types: [],
      typeForm: {
        name: ''
      },
      dialog: false,
      btns: [{
        label: '添加类型',
        type: 'primary',
        event: () => this.dialog = true
      }]
    }
  },
  activated () {
    this.getData()
  },
  methods: {
    // 启用 / 禁用
    able(item) {
      console.log(item)
    },
    // 删除
    del(item) {
      console.log(item)
    },
    // 添加类型
    addType(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post(`/v1/type`, this.typeForm)
            .then(res => {
              this.$message({ message: res.msg, type: 'success' })
              this.types.unshift(res)
              this.dialog = false
            })
        } else {
          return false
        }
      })
    },
    // 获取类型
    getData() {
      this.$axios.get('/v1/type')
        .then(res => {
          this.types = res.data.map(c => {
            c['firstTime'] = filterTime(c['firstTime'])
            return c
          })
        })
    }
  }
}
</script>

<style lang="scss">
.types-wrap {
}
</style>
