<template>
  <div class="site-wrap">
    <el-row :gutter='12'>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <slide-com title='站点设置'>
          <el-form label-width="80px">
            <el-form-item label='logo'>
              <el-upload
                class="upload-demo"
                action="/v1/upload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture">
                <el-button size="small" :disabled='fileList.length' type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label='站点名'>
              <el-input placeholder="请输入站点名称"></el-input>
            </el-form-item>
            <el-form-item label='关键字'>
              <el-input placeholder="请输入SEO关键字"></el-input>
            </el-form-item>
            <el-form-item label='描述'>
              <el-input type='textarea' placeholder="请输入SEO描述"></el-input>
            </el-form-item>
            <el-form-item label='统计代码'>
              <el-input placeholder="请输入友盟统计代码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type='primary'>确定</el-button>
            </el-form-item>
          </el-form>
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
      fileList: []
    }
  },
  methods: {
    handlePreview(file, list) {
      console.log(file, list)
    },
    handleRemove(file) {
      console.log(file)
    }
  }
}
</script>
