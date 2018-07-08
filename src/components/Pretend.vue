<template>
  <canvas id="pretend-canvas">您的浏览器不支持canvas标签，请您更换浏览器</canvas>
</template>

<script>
export default {
  mounted () {
    this.animateInif()
		setInterval(() => {
      this.draw(this.wid, this.hei)
    }, 50)
  },
  methods: {
    animateInif() {
      const canvas = document.querySelector('#pretend-canvas')
      this.can = canvas.getContext('2d')
      const s = window.screen
      this.wid = canvas.width = s.width
      this.hei = canvas.height = s.height
      this.can.fillStyle = this.color()
      this.words = Array(256).join('1').split('')
    },
    draw(w, h) {
      this.can.fillStyle = 'rgba(0, 0, 0, 0.05)'
      this.can.fillRect(0, 0, w, h)
      this.can.fillStyle = this.color()
      this.words.map((y, n) => {
        let text = String.fromCharCode(Math.ceil(65 + Math.random() * 57))
        let x = n * 10
        this.can.fillText(text, x, y)
        this.words[n] = (y > 758 + Math.random() * 484 ? 0 : y + 10)
      })
    },
    color() {
      var color = Math.ceil(Math.random() * 16777215).toString(16)
      while(color.length < 6) {
        color = '0' + color
      }
      return '#' + color
    }
  }
}
</script>
