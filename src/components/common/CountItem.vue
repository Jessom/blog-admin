<template>
  <div class="count-item-wrap">
    <div
      class="count-item line15 info space-between"
      v-for='(item, ind) in list'
      :key='ind'>
      <span class="pointer" @click='$emit("click", item)'>{{item.label}}</span>
      <span class="size24">{{item.value}} <small class="size16">{{item.unit}}</small></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>
