<template>
  <div class="site-wrap">
    <el-row :gutter='12'>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <slide-com class="clearfix" title='站点设置'>
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <el-form :model="siteForm" label-width="80px">
              <el-form-item prop='logo' label='logo'>
                <el-upload
                  action="/v1/logo"
                  method='POST'
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  list-type="picture">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <el-form-item prop='name' label='站点名'>
                <el-input v-model='siteForm.name' placeholder="请输入站点名称"></el-input>
              </el-form-item>
              <el-form-item prop='keyword' label='关键字'>
                <el-input v-model='siteForm.keyword' placeholder="请输入SEO关键字"></el-input>
              </el-form-item>
              <el-form-item prop='description' label='描述'>
                <el-input v-model='siteForm.description' type='textarea' placeholder="请输入SEO描述"></el-input>
              </el-form-item>
              <el-form-item prop='count' label='统计代码'>
                <el-input v-model='siteForm.count' placeholder="请输入友盟统计代码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type='primary' @click='submit'>确定</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </slide-com>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <slide-com title='站点信息'></slide-com>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [],
      siteForm: {
        name: '',
        keyword: '',
        count: '',
        description: '',
        id: 1
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios.get(`/v1/site`)
        .then(res => this.siteForm = res[0])
    },
    submit() {
      this.$confirm('是否继续保存', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        return this.$axios.put(`/v1/site`, this.siteForm)
      }).then((res) => {
        this.$message({ type: 'success', message: '修改成功!' })
      })
    },
    handlePreview(file, list) {
      console.log(file, list)
    },
    handleRemove(file) {
      console.log(file)
    }
  }
}
</script>
