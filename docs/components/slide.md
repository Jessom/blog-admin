# Slide

## 描述
头部卡片

## Demo
```vue
<template>
  <slide-com
    title='个人信息'
    :showSearch='true'
    @entry='onEntry'>
    <el-table>
    </el-table>
  </slide-com>
</template>

<script>
import SlideCom from '@/components/common/Slide.vue'
export default {
  components: {
    SlideCom
  }
}
</script>
```

## props
| 参数名 | 类型 | 默认值 | 描述  |
| :-------------: |:-------------:| :-----:| :-----:|
| title | String | - | 渲染标题 |
| showSearch | Boolean | false | 是否显示搜索框 |

## events
| 方法名 | 参数 | 描述  |
| :-------------: | :-----:| :-----:|
| entry | val | 回车事件 |
