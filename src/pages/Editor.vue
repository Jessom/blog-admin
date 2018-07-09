<template>
  <div class="editor-wrap">
    <el-row>
      <el-col>
        <slide-com title='文章'>
          <el-form :model="editorForm" :rules="rules" ref="ruleForm">
            <!-- 标题 -->
            <el-form-item prop='title'>
              <el-input placeholder="请输入标题" v-model="editorForm.title">
                <el-select v-model="select" slot="prepend">
                  <el-option label="原创" value="1"></el-option>
                  <el-option label="转载" value="2"></el-option>
                  <el-option label="翻译" value="3"></el-option>
                </el-select>
              </el-input>
            </el-form-item>
            <!-- 原文地址 -->
            <el-form-item v-show='select!=1' prop='originalText'>
              <el-input v-model='editorForm.originalText' placeholder='原文地址'></el-input>
            </el-form-item>
            <!-- 标签 -->
            <el-form-item prop='tag'>
              <el-input v-model='editorForm.tag' placeholder='标签，如：vue 可使用逗号,分好;分割'></el-input>
            </el-form-item>
            <!-- 内容 -->
            <el-form-item>
              <v-editor />
            </el-form-item>
            <!-- 置顶 && 推荐 -->
            <el-form-item>
              <el-checkbox-group v-model="editorForm.type">
                <el-checkbox label="置顶" name="type"></el-checkbox>
                <el-checkbox label="推荐" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <!-- 发布 -->
            <el-form-item>
              <el-button size='small' type='primary'>发布文章</el-button>
            </el-form-item>
          </el-form>
        </slide-com>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VEditor from '@/components/VEditor.vue'
export default {
  data () {
    return {
      select: '1',
      editorForm: {
        title: '',
        type: [],
        tag: '',
        originalText: ''
      },
      rules: {}
    }
  },
  components: {
    VEditor
  }
}
</script>

<style lang="scss">
.editor-wrap {
  .el-select .el-input {
    width: 100px;
  }
}
</style>
