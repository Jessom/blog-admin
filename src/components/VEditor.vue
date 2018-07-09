<template>
	<div class="v-editor-container">
		<mavon-editor
			style='height:100%;'
			:value='value'
      ref='md'
      @imgAdd="$imgAdd"
			:boxShadow='false'
      :toolbars='toolbars'
			@change='getMd'>
		</mavon-editor>
	</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'VEditor',
  data () {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        // 预览
        preview: true
      }
    }
  },
	props: {
		value: String
	},
	methods: {
		getMd(val, render) {
      this.$emit('change', val)
      /* console.log(val)
			return val */
    },
    // 上传图片
    $imgAdd(pos, $file) {
      console.log(pos, $file)
      /* var formdata = new FormData()
      formdata.append('image', $file)
      this.$axios({
        url: 'server url',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(url => {
        this.$refs.md.$img2Url(pos, url)
      }) */
    }
	},
	components: {
		mavonEditor
	}
}
</script>

<style lang='scss'>
.v-editor-container {
	margin: 0 auto;
	height: 100%;
}
</style>
