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
                    <span>{{ props.row.id }}</span>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      btns: [{
        label: '添加管理员',
        type: 'primary',
        event: () => console.log('添加')
      }],
      count: [{
        label: '共',
        value: 5,
        unit: '人'
      }],
      adminer: [{
        name: 'わタし',
        account: 'jessoncheung@gmail.com',
        lastTime: '2018-07-07 10:56',
        id: '53102b43bf1044ed8b0ba36b',
        firstTime: '2018-07-05 20:03',
        mobile: '153718298**',
        status: true
      }, {
        name: 'admin',
        account: '857477061@qq.com',
        lastTime: '2018-07-06 22:34',
        id: '53102b43bf1044ed8b0ba36c',
        firstTime: '2018-07-05 20:04',
        mobile: '159****3014',
        status: false
      }]
    }
  },
  methods: {
    // 删除
    del(item) {
      console.log(item)
    },
    // 启用 / 禁用
    able(item) {
      console.log(item)
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
