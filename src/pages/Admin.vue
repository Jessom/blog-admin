<template>
  <div class="admin-wrap">
    <el-row :gutter='12'>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <slide-com title='管理员'>
          <el-table
            :data="adminer"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="用户名">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="用户 ID">
                    <span>{{ props.row._id }}</span>
                  </el-form-item>
                  <el-form-item label="账号">
                    <span>{{ props.row.account }}</span>
                  </el-form-item>
                  <el-form-item label="状态">
                    <el-tag
                      size='small'
                      :type="props.row.status?'success':'warning'">{{props.row.status ? "正常": "禁用"}}</el-tag>
                  </el-form-item>
                  <el-form-item label="联系方式">
                    <span>{{ props.row.mobile }}</span>
                  </el-form-item>
                  <el-form-item label="登录时间">
                    <span>{{ props.row.lastTime }}</span>
                  </el-form-item>
                  <el-form-item label="注册时间">
                    <span>{{ props.row.firstTime }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="用户名"
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
              label="登录时间"
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
        <slide-com title='统计' class="mt10">
          <count-item :list='count' />
        </slide-com>
      </el-col>
    </el-row>

    <el-dialog title="添加管理员" width='500px' :visible.sync="dialog">
      <el-form ref="adminForm" :rules='adminRules' :model="admin">
        <el-form-item prop='name'>
          <el-input
            prefix-icon='iconfont icon-zhanghao'
            v-model="admin.name"
            placeholder='请输入用户名'
            autofocus="true"></el-input>
        </el-form-item>
        <el-form-item prop='account'>
          <el-input
            prefix-icon='iconfont icon-tubiao209'
            v-model="admin.account"
            placeholder='请输入账号（邮箱地址）'
            type='email'></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon='iconfont icon-shouji'
            placeholder='请输入联系方式（手机号）'
            v-model="admin.mobile"
            type='tel'></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon='iconfont icon-mima'
            v-model="admin.password"
            placeholder='请输入密码'
            type='password'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click='addAdmin("adminForm")'>确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import regex from '@/utils/regex'
import { filterTime } from '@/utils/filter'
export default {
  data () {
    return {
      adminRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { pattern: regex.email, message: '邮箱格式不合法', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: regex.mobile, message: '手机号格式不合法', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: regex.password, message: '密码格式不正确', trigger: 'blur' }
        ]
      },
      admin: {
        name: '',
        account: '',
        mobile: '',
        password: ''
      },
      dialog: false,
      btns: [{
        label: '添加管理员',
        type: 'primary',
        event: () => this.dialog = true
      }],
      count: [],
      adminer: []
    }
  },
  created () {
    this.getdata(0)
  },
  methods: {
    // 删除
    del(item) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return this.$axios.delete(`/v1/admin/${item._id}`)
      }).then((res) => {
        this.adminer.splice(this.adminer.findIndex(c => c._id === item._id), 1)
        this.$message({ type: 'success', message: '删除成功!' })
      })
    },
    // 启用 / 禁用
    able(item) {
      let tip = item.status ? '禁用' : '启用'
      this.$confirm(`确定要${tip}该管理员`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: item.status ? 'warning' : 'success'
      }).then(() => {
        return this.$axios.put('/v1/admin', { id: item._id, status: !item.status })
      }).then(res => {
        item.status = !item.status
        this.$message({ type: 'success', message: `${tip}成功！` })
      })
    },
    // 添加管理员
    addAdmin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addEvent()
        } else {
          return false
        }
      })
    },
    async addEvent() {
      try {
        const res = await this.$axios.post('/v1/admin', this.admin)
        this.$message({ message: res.msg, type: 'success' })
        this.adminer.unshift(res)
        this.dialog = false
      } catch (error) {}
    },
    // 请求数据
    async getdata(page) {
      try {
        const res = await this.$axios.get(`/v1/admin?page=${page}`)
        this.count = [{ label: '共', value: res.count, unit: '人' }]
        this.adminer = res.list.map(c => {
          c.firstTime = filterTime(c.firstTime, 'yyyy-MM-dd hh:mm')
          c.lastTime = filterTime(c.lastTime, 'yyyy-MM-dd hh:mm')
          return c
        })
      } catch (error) {}
    }
  }
}
</script>

<style lang="scss">
.admin-wrap {
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
</style>
