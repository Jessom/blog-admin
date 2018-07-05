<template>
  <div class="article-wrap">
    <el-row :gutter='12'>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <slide-com title='文章列表'>
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
                <el-tag size='small' type="success" disable-transitions>{{scope.row.type}}</el-tag>
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
          <hand
            :screen='screen'
            :btns='btns' />
        </slide-com>
        <slide-com class="mt10" title='统计'>
          <div class="count-item info space-between">
            <span>共</span>
            <span class="size24">46 <small class="size16">篇</small></span>
          </div>
          <div class="count-item info space-between">
            <span>JavaScript</span>
            <span class="size24">32 <small class="size16">篇</small></span>
          </div>
          <div class="count-item info space-between">
            <span>Python</span>
            <span class="size24">14 <small class="size16">篇</small></span>
          </div>
        </slide-com>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SlideCom from '@/components/common/Slide.vue'
import Hand from '@/components/common/Hand.vue'
export default {
  data () {
    return {
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
      screen: [{
        value: '53102b43bf1044ed8b0ba36b',
        label: 'vuejs'
      }, {
        value: '53102b43bf1044ed8b0ba36c',
        label: 'nodejs'
      }, {
        value: '53102b43bf1044ed8b0ba36d',
        label: 'reactjs'
      }],
      tableData: [{
        title: '前端工程师最好的全栈开发实践-设计开发属于自己的nodejs博客',
        type: 'NodeJS',
        status: true,
        firstTime: '2018-07-05 20:13',
        lastTime: '2018-07-05 20:13'
      }, {
        title: '请问 ！阿里云OSS  nodejs版服务端签名直传并设置上传回调 有谁做过吗？',
        type: 'NodeJS',
        status: true,
        firstTime: '2018-07-05 20:13',
        lastTime: '2018-07-05 20:13'
      }, {
        title: '自己用Nodejs+es6语法+单例模式 封装的数据库类库 可用于,Express、 Koa、  原生nodejs操作MongoDb数据库的类库【用法简单】',
        type: 'NodeJS',
        status: false,
        firstTime: '2018-07-05 20:13',
        lastTime: '2018-07-05 20:13'
      }]
    }
  },
  components: {
    SlideCom,
    Hand
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
