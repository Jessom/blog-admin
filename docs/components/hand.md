# hand

## 描述
操作区域

## Demo
```vue
<template>
  <div>
    <hand-com
      :screen='screen'
      :select='select'
      :date='date'
      :btns='btns' />
  </div>
</template>

<script>
import HandCom from '@/components/common/Hand.vue'
export default {
  data() {
    return {
      select: '',
      date: '',
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
      }]
    }
  },
  components: {
    HandCom
  }
}
</script>
```

## props
| 参数名 | 类型 | 默认值 | 描述  |
| :-------------: |:-------------:| :-----:| :-----:|
| select | String | - | 下拉选择框选中值 |
| screen | Array | - | 下拉选择框渲染数据，不传入则不显示 |
| date | String | - | 日期选择选中值 |
| showDate | Boolean | true | 是否显示日期选择 |
| btnSize | String | small | 按钮大小 |
| btns | Array | - | 按钮组，不传入则不显示 |

### screen
| 参数名 | 类型 | 默认值 | 描述  |
| :-------------: |:-------------:| :-----:| :-----:|
| value | String | - | 可以是id值之类的，选中值就是这个 |
| label | String | - | 渲染值 |

### btns
| 参数名 | 类型 | 默认值 | 描述  |
| :-------------: |:-------------:| :-----:| :-----:|
| label | String | - | 渲染值 |
| type | String | - | 按钮类型，可选值`primary`、`success`、`info`、`warning`、`danger` |
| event | Function | - | 点击事件 |
