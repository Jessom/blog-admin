<template>
  <div class="article-wrap">
    <el-row :gutter='12'>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <slide-com
          title='文章列表'
          :showSearch='true'
          @entry='onEntry'>
          <el-table
          :data="tableData"
          style="width: 100%">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="title"
              label="标题"
              width="400">
            </el-table-column>
            <el-table-column
              label="类型"
              width="160">
              <template slot-scope="scope">
                <el-tag
                  size='small'
                  :type='scope.row.type==0?"success":(scope.row.type==1?"warning":"danger")'>
                  {{scope.row.type==0?"原创":(scope.row.type==1?"转载":"翻译")}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width='100'>
              <template slot-scope="scope">
                <el-tag
                  size='small'
                  :type="scope.row.status?'success':'warning'">{{scope.row.status ? "正常": "禁用"}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="firstTime"
              label="添加时间"
              width='140'>
            </el-table-column>
            <el-table-column
              prop="lastTime"
              label="修改时间"
              width='140'>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button type="text" size="small">删除</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </slide-com>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <slide-com title='操作'>
          <hand-com
            :date='date'
            :btns='btns' />
        </slide-com>
        <slide-com class="mt10" title='统计'>
          <count-item :list='count' @click='countClick' />
        </slide-com>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { filterTime } from '@/utils/filter'
export default {
  data () {
    return {
      count: [{
        label: '共',
        value: 45,
        unit: '篇'
      }, {
        label: 'JavaScript',
        value: 32,
        unit: '篇'
      }, {
        label: 'Python',
        value: 13,
        unit: '篇'
      }],
      date: '',
      btns: [{
        label: '添加',
        type: 'primary',
        event: () => console.log('添加')
      }, {
        label: '启用',
        type: 'success',
        event: () => console.log('启用')
      }, {
        label: '禁用',
        type: 'warning',
        event: () => console.log('禁用')
      }, {
        label: '删除',
        type: 'danger',
        event: () => console.log('删除')
      }],
      tableData: []
    }
  },
  created () {
    this.getData(0)
  },
  methods: {
    getData(page) {
      this.$axios.get(`/v1/article?page=${page}`)
        .then(res => {
          this.tableData = res.list.map(c => {
            c.firstTime = filterTime(c.firstTime, 'yyyy-MM-dd hh:mm')
            c.lastTime = filterTime(c.lastTime, 'yyyy-MM-dd hh:mm')
            return c
          })
        })
    },
    // 搜索框回车事件
    onEntry(val) {
      console.log(val)
    },
    // 右侧统计点击某一项
    countClick(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss">
.article-wrap {
  .count-item {
    line-height: 1.5;
  }
}
</style>
