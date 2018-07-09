<template>
	<div class="v-editor-container">
		<mavon-editor
			style='height:100%;'
			:value='value'
			:subfield='false'
			:boxShadow='false'
			@change='onchange'>
		</mavon-editor>
	</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
	name: 'VEditor',
	props: {
		value: String
	},
	methods: {
		onchange(val, render) {
			this.$emit('change', val, render)
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
