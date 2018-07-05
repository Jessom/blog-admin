<template>
  <div class="login-wrap">
    <canvas id="canvas">您的浏览器不支持canvas标签，请您更换浏览器</canvas>
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      class="login-form-wrap">
      <el-form-item prop="account">
        <el-input
          placeholder='请输入账号'
          v-model="loginForm.account">
          <i slot="prefix" class="el-input__icon el-icon-date"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder='请输入密码'
          v-model="loginForm.password">
          <i slot="prefix" class="el-input__icon el-icon-date"></i>
        </el-input>
      </el-form-item>
      <el-form-item style='margin-bottom: 0'>
        <el-button
          class='submit-btn'
          type="primary"
          :loading="login"
          @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import regex from '@/utils/regex'
export default {
  data () {
    return {
      login: false,
      loginForm: {
        account: '',
        password: ''
      },
      loginRules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { pattern: regex.email, message: '邮箱格式不合法', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: regex.password, message: '密码格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.animateInif()
		setInterval(() => {
      this.draw(this.wid, this.hei)
    }, 50)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    animateInif() {
      const canvas = document.querySelector('#canvas')
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

<style lang="scss">
@import 'static/scss/_variable.scss';
.login-wrap {
  background-color: #22292C;
}
.login-form-wrap {
  position: absolute;
  width: 324px;
  z-index: 1;
  top: 50%;
  left: 50%;
  padding: 20px;
  background: linear-gradient(#1b1b1b, #111);
  transform: translate3d(-50%, -50%, 0);
  box-shadow: inset 0 0 0 1px #272727;
  border: 1px solid #000;
  border-radius: 5px;
  .el-input {
    background: linear-gradient(#333, #222);
    .el-input__inner {
      background-color: transparent;
      box-shadow: 0 2px 0 #000;
      border: 1px solid #444;
      &:focus {
        border-color: #393;
        box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
        animation: glow 800ms ease-out infinite alternate;
      }
    }
  }
  .submit-btn {
    background: linear-gradient(#333, #222);
    border-color: #444;
    color: #fff;
    width: 100%;
    &.is-disabled:hover, &:hover {
      background: linear-gradient(#393939, #292929);
      border-color: #444;
      color: #5f5;
    }
  }
}
@keyframes glow {
  0% {
    border-color: $green;
    box-shadow: 0 0 5px lighten($green, 10), inset 0 0 5px lighten($green, 13), 0 2px 0 #000;
  }
  100% {
    border-color: lighten($green, 4);
    box-shadow: 0 0 20px lighten($green, 5), inset 0 0 10px lighten($green, 8), 0 2px 0 #000;
  }
}
</style>
