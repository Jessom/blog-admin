<template>
  <div class="nav-wrap">
    <span class="nav-btn" v-for='(item, ind) in list' :key='ind'>
      <el-button
        size="mini"
        @click='onNavtab($event, item)'
        :type='active===item.path?"primary":""'>
        {{item.title}}
        <i
          class="el-icon-close el-icon--right"
          @click.stop='onNavDel($event, item)'></i>
      </el-button>
    </span>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'navbar',
  data () {
    return {
      list: []
    }
  },
  watch: {
    '$route': function(to, form) {
      document.title = to.meta.title
      this.active = to.path
      if(this.list.findIndex(c => c.path === to.path) <= -1) {
        this.list.push({ title: to.meta.title, path: to.path })
      }
    }
  },
  computed: {
    active: {
      get: function() {
        return this.$store.state.mutations.curPath
      },
      set: function() {}
    }
  },
  methods: {
    // 删除某一项
    onNavDel(e, item) {
      if(this.list.length === 1) return
      this.list.splice(this.list.findIndex(c => c.path === item.path), 1)
    },
    // 切换
    onNavtab(e, item) {
      this.$router.push({ path: item.path })
    }
  },
  created() {
    this.list.push({ title: this.$route.meta.title, path: this.$route.path })
  }
}
</script>

<style lang="scss">
.nav-wrap {
  background-color: #fff;
  height: 40px;
  padding: 0 6px;
  margin-bottom: 12px;
  .nav-btn {
    display: inline-block;
    margin: 6px 3px;
  }
}
</style>
