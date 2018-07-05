<template>
  <div class="slide-wrap">
    <h4 class="title" v-if='title'>{{title}}</h4>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.slide-wrap {
  background-color: #fff;
  .title, .content {
    padding: 10px;
  }
  .title {
    font-weight: normal;
    margin: 0;
    background-color: #f6f6f6;
    color: #444;
    font-size: 13px;
    border-radius: 3px 3px 0 0;
  }
  .content {
    border-radius: 0 0 3px 3px;
  }
}
</style>
