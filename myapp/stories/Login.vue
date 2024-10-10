<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <img src="/assets/images/logo.jpeg" alt="Aladia logo" class="logo" />
        <h1 class="login-title">Welcome to Aladia!</h1>
        <p class="login-subtitle">Create or access your account from here</p>
      </div>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="input-group">
          <label class="sr-only">Email Address</label>
          <div class="input-wrapper">
            <span class="input-icon">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m0 0l-4-4m4 4l-4 4m8 0h8m-8 0l4-4m-4 4l4-4"></path>
              </svg>
            </span>
            <input type="email" placeholder="Email Address" class="input-field" />
          </div>
        </div>

        <button type="submit" class="submit-btn">Enter</button>
      </form>

      <div class="separator">
        <span class="line"></span>
        <span class="or-text">Or</span>
        <span class="line"></span>
      </div>

      <div class="social-login-buttons">
        <button class="social-btn google">
          <img src="/assets/images/google-icon.jpeg" alt="Google icon" class="icon" />
          Continue with Google
        </button>
        <button class="social-btn facebook">
          <img src="/assets/images/facebook-icon.png" alt="Facebook icon" class="icon" />
          Continue with Facebook
        </button>
        <button class="social-btn apple">
          <img src="/assets/images/apple-icon.jpeg" alt="Apple icon" class="icon" />
          Continue with Apple
        </button>
      </div>

      <p class="terms">
        <a href="#" class="terms-link">Terms & Conditions</a>
      </p>
    </div>
  </div>
</template>

<script>
import './Login.css';

export default {
  name: 'LoginPage',
  methods: {
    handleSubmit() {
      alert('Form submitted!');
    }
  }
}
</script>
