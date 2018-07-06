module.exports = {
  title: 'わタし', // 设置网站标题
  description: 'わタしの ブログ', //描述
  dest: './dist',   // 设置输出目录
  port: 2233, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '组件', link: '/components/' },
      { text: '知识库', link: '/knowledge/' },
      { text: 'github',        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/components/': [{
        title: '公共组件',
        collapsable: false,
        children: [ 'hand', 'slide' ]
      }]
    }
  }
}