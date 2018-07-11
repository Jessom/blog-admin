<template>
  <div class="editor-wrap">
    <el-row>
      <el-col>
        <slide-com title='文章'>
          <el-form :model="editorForm" :rules="rules" ref="editorForm">
            <!-- 标题 -->
            <el-form-item prop='title'>
              <el-input placeholder="请输入标题" v-model="editorForm.title">
                <el-select v-model="editorForm.type" slot="prepend">
                  <el-option label="原创" value="0"></el-option>
                  <el-option label="转载" value="1"></el-option>
                  <el-option label="翻译" value="2"></el-option>
                </el-select>
              </el-input>
            </el-form-item>
            <!-- 原文地址 -->
            <el-form-item v-show='editorForm.type!=0' prop='originalText'>
              <el-input v-model='editorForm.originalText' placeholder='原文地址'></el-input>
            </el-form-item>
            <!-- 标签 -->
            <el-form-item prop='tag'>
              <el-input v-model='editorForm.tag' placeholder='标签，如：vue 可使用逗号,分好;分割'></el-input>
            </el-form-item>
            <!-- 内容 -->
            <el-form-item prop='content'>
              <v-editor @change='setContent' :value='editorForm.content' />
            </el-form-item>
            <!-- 置顶 && 推荐 -->
            <el-form-item>
              <el-checkbox-group v-model="editorForm.hand">
                <el-checkbox label="置顶" value='0' name="type"></el-checkbox>
                <el-checkbox label="推荐" value='1' name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <!-- 发布 -->
            <el-form-item>
              <el-button size='small' @click='submit("editorForm")' type='primary'>发布文章</el-button>
            </el-form-item>
          </el-form>
        </slide-com>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VEditor from '@/components/VEditor.vue'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      editorForm: {
        title: '',
        hand: [],
        tag: '',
        type: '0',
        originalText: '',
        content: ''
      },
      rules: {
        title: [ { required: true, message: '请输入标题', trigger: 'blur' } ]
      }
    }
  },
  activated() {
    this.getData()
  },
  computed: {
    ...mapState({
      uid: state => state.mutations.userInfo.id
    })
  },
  methods: {
    getData() {
      const id = this.$route.params.id
      if(id) {
        this.$axios.get(`/v1/article/${id}`)
          .then(res => {
            res.type = res.type + ''
            this.editorForm = res
          })
      }
    },
    setContent(val) {
      this.editorForm.content = val
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.editorForm['type'] = Number(this.editorForm['type'])
          if(this.$route.params.id) {
            this.$axios.put('/v1/article', this.editorForm)
              .then(res => {
                this.$router.go(-1)
                this.$message({ type: 'success', message: res.msg })
              })
          } else {
            this.editorForm['author'] = this.uid
            this.$axios.post('/v1/article', this.editorForm)
              .then(res => {
                this.$router.go(-1)
                this.$message({ type: 'success', message: res.msg })
              })
          }
        } else {
          return false
        }
      })
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
