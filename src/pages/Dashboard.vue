<template>
  <div class="dashboard-wrap">
    <el-row :gutter="12" class="record">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="item">
        <el-card shadow="hover">
          <i class="iconfont blue icon-yonghu-tianchong"></i>
          <span class="meta">230</span>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="item">
        <el-card shadow="hover">
          <i class="iconfont success icon-wenzhang"></i>
          <span class="meta">450</span>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="item">
        <el-card shadow="hover">
          <i class="iconfont warning icon-liulanjilu"></i>
          <span class="meta">1230</span>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="item">
        <el-card shadow="hover">
          <i class="iconfont danger icon-ai-message"></i>
          <span class="meta">93</span>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter='12' class="section">
      <el-col class="hidden-xs-only hidden-sm-only" :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <div style='height:400px;' class="text-center white-bg">
          <div class="user-info">
            <img class="avatar radius50" width='50' src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3154777717,3742877994&fm=27&gp=0.jpg" alt="">
            <a href="mailto:jessoncheung@gmail.com" class="email info">jessoncheung@gmail.com</a>
          </div>
          <img src="http://p94agf1t4.bkt.clouddn.com/images/wechat.jpg" width='60%' alt="">
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <el-row class="white-bg">
          <el-col class="chart-wrap" :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><line-chart :options='line' /></el-col>
          <el-col class="chart-wrap" :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><bar-chart :options='bar' /></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from '@/components/charts/Line.vue'
import BarChart from '@/components/charts/Bar.vue'
export default {
  name: 'dashboard',
  data () {
    return {
      line: {
        xAxis: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        rotate: 45,
        list: [{
					name: '新用户',
					data: [23, 15, 25, 32, 14, 48, 53, 32, 41, 27, 59, 42]
				}, {
					name: '新文章',
					data: [28, 26, 30, 24, 28, 28, 30, 26, 27, 29, 30, 31]
				}, {
					name: '新消息',
					data: [6, 12, 8, 14, 13, 18, 3, 9, 24, 13, 17, 23]
				}]
      },
      bar: {
        xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        stack: ['新用户', '新文章', '新消息'],
				list: [{
					name: '新用户',
					data: [0, 6, 3, 1, 5, 2, 4]
				}, {
					name: '新文章',
					data: [1, 1, 1, 1, 1, 1, 0]
				}, {
					name: '新消息',
					data: [3, 5, 6, 7, 12, 4, 2]
				}]
			}
    }
  },
  components: {
    LineChart,
    BarChart
  }
}
</script>

<style lang="scss">
@import 'static/scss/_variable.scss';
.dashboard-wrap {
  .record .item {
    .el-card__body {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    .iconfont { font-size: 30px; }
    .meta { font-size: 24px; color: $grey; }
  }
  .section {
    padding-top: 12px;
    .user-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f2f2f2;
    }
  }
  .chart-wrap {
    height: 400px;
    overflow: hidden;
    padding-top: 25px;
  }
}
</style>
