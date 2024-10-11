<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <img src="../assets/images/logo.jpeg" alt="Aladia logo" class="logo" />
        <h1 class="login-title">Welcome to Aladia!</h1>
        <p class="login-subtitle">Create or access your account from here</p>
      </div>

      <LoginForm />

      <div class="separator">
        <span class="line"></span>
        <span class="or-text">Or</span>
        <span class="line"></span>
      </div>

      <div class="social-login-buttons">
        <Button class="social-btn google">
          <img src="../assets/images/google-icon.jpeg" alt="Google icon" class="icon" />
          Continue with Google
        </Button>
        <Button class="social-btn facebook">
          <img src="../assets/images/facebook-icon.png" alt="Facebook icon" class="icon" />
          Continue with Facebook
        </Button>
        <Button class="social-btn apple">
          <img src="../assets/images/apple-icon.jpeg" alt="Apple icon" class="icon" />
          Continue with Apple
        </Button>
      </div>

      <p class="terms">
        <a href="#" class="terms-link">Terms & Conditions</a>
      </p>
    </div>
  </div>
</template>

<script>
import LoginForm from '../organisms/LoginForm.vue'
import Button from '../atoms/Button.vue'

export default {
  name: 'LoginTemplate',
  components: {
    LoginForm,
    Button,
  },
}
</script>

<style scoped>
/* Similar styles for layout and responsiveness as before */
</style>
